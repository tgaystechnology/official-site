"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Package, Check } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion, AnimatePresence } from 'framer-motion';

import PaymentStatusModal from './PaymentStatusModal';
import styles from './PaymentForm.module.css';

const PaymentForm = ({ plan, isSupportChecked, setIsSupportChecked, totalAmount, displayTotal, selectedSubscription }) => {
    const [loading, setLoading] = useState(false);
    const [modalState, setModalState] = useState({ isOpen: false, type: 'success' });
    const [pkgNames, setPkgNames] = useState([]);
    const [selectedPkgForNote, setSelectedPkgForNote] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    
    // Form refs
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const descriptionRef = useRef(null);

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
        if (modalState.type === 'success') {
             window.location.reload(); // Reload after success modal closed
        }
    };

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await fetch('https://lmsadmin.tgaystechnology.com/api/packages/');
                if (response.ok) {
                    const data = await response.json();
                    setPkgNames(data.map(item => item.name));
                }
            } catch (err) {
                console.error("Error fetching packages for footer dropdown:", err);
            }
        };
        fetchPackages();
    }, []);

    const [errors, setErrors] = useState({});

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        // Validate first
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const description = descriptionRef.current.value;

        const newErrors = {};
        if (!name) newErrors.name = true;
        if (!email) newErrors.email = true;
        if (!phone) newErrors.phone = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            // Send the user's data to the new lead collection endpoint
            const leadData = {
                full_name: name,
                email: email,
                phone: phone,
                note: description ? 
                    `${plan?.title} ${selectedSubscription}.\nPackage: ${selectedPkgForNote}\n${description}` : 
                    `${plan?.title} ${selectedSubscription}.\nPackage: ${selectedPkgForNote}`
            };


            const result = await fetch('https://lmsadmin.tgaystechnology.com/api/leads/collect/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(leadData),
            });

            const data = await result.json();

            if (!result.ok) {
                console.error("DEBUG: API Response Error Details:", data);
                throw new Error(data.message || data.error || 'Failed to submit lead');
            }

            setLoading(false);
            setModalState({ isOpen: true, type: 'success' });
        } catch (error) {
            console.error('Error submitting lead:', error);
            setLoading(false);
            setModalState({ isOpen: true, type: 'failure' });
        }
    };

    return (
        <React.Fragment>
             <form onSubmit={handlePayment} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                        id="payment-name-input"
                        ref={nameRef}
                        type="text"
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        placeholder="Full Name"
                        onChange={() => {
                            if (errors.name) setErrors(prev => ({ ...prev, name: false }));
                        }}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        ref={emailRef}
                        type="email"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="Email Address"
                        onChange={() => {
                            if (errors.email) setErrors(prev => ({ ...prev, email: false }));
                        }}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        ref={phoneRef}
                        type="tel"
                        className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                        placeholder="Phone Number"
                        onChange={() => {
                            if (errors.phone) setErrors(prev => ({ ...prev, phone: false }));
                        }}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        ref={descriptionRef}
                        className={`${styles.input} ${styles.textarea}`}
                        placeholder="Additional Description (Optional)"
                        rows="3"
                        style={{ height: '120px', minHeight: '120px', paddingTop: '12px', paddingBottom: '12px', resize: 'vertical' }}
                    ></textarea>
                </div>

                {/* Support Checkbox */}
                {/* 
                <div className="pt-2">
                    <label className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:border-slate-300 transition-colors relative overflow-hidden group">
                        <div className="relative flex items-center mt-0.5">
                            <input
                                type="checkbox"
                                checked={isSupportChecked}
                                onChange={(e) => setIsSupportChecked(e.target.checked)}
                                className="w-5 h-5 border-2 border-slate-300 rounded text-blue-600 focus:ring-blue-500 transition-all checked:bg-blue-600 checked:border-blue-600"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold text-slate-900 text-sm">3 Months Support</span>
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">Recommended</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Get dedicated support and maintenance for your website for 3 months.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </label>
                </div>
                */}

                {/* Total Amount Display */}
                {/* 
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 mt-4">
                    <span className="text-sm font-medium text-slate-500">Total Amount:</span>
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">
                        ₹{displayTotal}
                    </span>
                </div>
                */}
                
                 {/* Footer Button Area */}                  <div className={styles.footer}>
                    <button 
                        type="submit"
                        disabled={loading}
                        className={styles.submitBtn}
                    >
                        {loading ? (
                            <span className={styles.loadingWrapper}>
                                <svg className={styles.spinner} viewBox="0 0 24 24">
                                    <circle className={styles.spinnerCircle} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className={styles.spinnerPath} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            `Book Your Demo`
                        )}
                    </button>
                </div>

            </form>

            <PaymentStatusModal 
                type={modalState.type}
                isOpen={modalState.isOpen}
                onClose={closeModal}
            />
        </React.Fragment>
    );
};

export default PaymentForm;


