"use client";
import React, { useState, useRef } from 'react';

const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

import PaymentStatusModal from './PaymentStatusModal';

const PaymentForm = ({ plan, isSupportChecked, setIsSupportChecked, totalAmount, displayTotal }) => {
    const [loading, setLoading] = useState(false);
    const [modalState, setModalState] = useState({ isOpen: false, type: 'success' });
    
    // Form refs
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
        if (modalState.type === 'success') {
             window.location.reload(); // Reload after success modal closed
        }
    };

    const [errors, setErrors] = useState({});

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        // Validate first
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        const newErrors = {};
        if (!name) newErrors.name = true;
        if (!email) newErrors.email = true;
        if (!phone) newErrors.phone = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        const res = await loadRazorpay();

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?'); // Keep alert for system error
            setLoading(false);
            return;
        }

        try {
            // Create Order
            const result = await fetch('/api/payment/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: totalAmount,
                    currency: 'INR',
                    receipt: `receipt_${Date.now()}`
                }),
            });

            const data = await result.json();

            if (!data.orderId) {
                throw new Error(data.error || 'Server error');
            }

            const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

            if (!key) {
                throw new Error("Razorpay Key ID missing");
            }

            const options = {
                key: key,
                amount: data.amount,
                currency: "INR",
                name: "TGAYS Technology",
                description: `Payment for ${plan.title} ${isSupportChecked ? '+ 3 Months Support' : ''}`,
                order_id: data.orderId,
                handler: function (response) {
                    const paymentData = {
                        order_id: response.razorpay_order_id,
                        payment_id: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                        customer_name: name,
                        customer_email: email,
                        customer_phone: phone,
                        plan_name: plan.title,
                        amount: totalAmount,
                        currency: 'INR',
                        payment_status: 'success'
                    };

                    fetch('/api/payment/save', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(paymentData)
                    })
                        .then(res => res.json())
                        .then(() => {
                            setLoading(false);
                            setModalState({ isOpen: true, type: 'success' });
                        })
                        .catch(err => console.error(err));
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: phone,
                },
                theme: {
                    color: "#3399cc",
                },
                modal: {
                    ondismiss: function() {
                        setLoading(false);
                        setModalState({ isOpen: true, type: 'failure' });
                    }
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

            paymentObject.on('payment.failed', function (response) {
                setLoading(false);
                setModalState({ isOpen: true, type: 'failure' });
            });

        } catch (error) {
            console.error(error);
            setLoading(false);
            setModalState({ isOpen: true, type: 'failure' });
        }
    };

    return (
        <React.Fragment>
             <form onSubmit={handlePayment} className="space-y-4">
                <div className="space-y-1.5">
                    <input
                        ref={nameRef}
                        type="text"
                        className={`w-full px-4 py-3 bg-slate-50 border-0 ring-1 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                            errors.name 
                                ? 'ring-red-500 focus:ring-2 focus:ring-red-500 focus:bg-white' 
                                : 'ring-slate-200 focus:ring-2 focus:ring-black focus:bg-white'
                        }`}
                        placeholder="Full Name"
                        onChange={() => {
                            if (errors.name) setErrors(prev => ({ ...prev, name: false }));
                        }}
                    />
                </div>
                <div className="space-y-1.5">
                    <input
                        ref={emailRef}
                        type="email"
                        className={`w-full px-4 py-3 bg-slate-50 border-0 ring-1 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                            errors.email 
                                ? 'ring-red-500 focus:ring-2 focus:ring-red-500 focus:bg-white' 
                                : 'ring-slate-200 focus:ring-2 focus:ring-black focus:bg-white'
                        }`}
                        placeholder="Email Address"
                        onChange={() => {
                            if (errors.email) setErrors(prev => ({ ...prev, email: false }));
                        }}
                    />
                </div>
                <div className="space-y-1.5">
                    <input
                        ref={phoneRef}
                        type="tel"
                        className={`w-full px-4 py-3 bg-slate-50 border-0 ring-1 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none transition-all ${
                            errors.phone 
                                ? 'ring-red-500 focus:ring-2 focus:ring-red-500 focus:bg-white' 
                                : 'ring-slate-200 focus:ring-2 focus:ring-black focus:bg-white'
                        }`}
                        placeholder="Phone Number"
                        onChange={() => {
                            if (errors.phone) setErrors(prev => ({ ...prev, phone: false }));
                        }}
                    />
                </div>

                {/* Support Checkbox */}
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

                {/* Total Amount Display */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 mt-4">
                    <span className="text-sm font-medium text-slate-500">Total Amount:</span>
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">
                        ₹{displayTotal}
                    </span>
                </div>
                
                 {/* Footer Button Area */}
                  <div className="pt-6">
                    <button 
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 text-white bg-[#0F111A] rounded-xl font-medium text-xl hover:bg-black/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            `Make Payment • ₹${displayTotal}`
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


