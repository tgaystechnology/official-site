import React from 'react';
import { createPortal } from 'react-dom';
import styles from './PaymentStatusModal.module.css';

const PaymentStatusModal = ({ type, isOpen, onClose }) => {
    if (!isOpen) return null;

    const isSuccess = type === 'success';

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={`${styles.iconWrapper} ${isSuccess ? styles.successIcon : styles.failureIcon}`}>
                    {isSuccess ? (
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    ) : (
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    )}
                </div>

                <h2 className={styles.title}>
                    {isSuccess ? 'Request Submitted!' : 'Submission Failed'}
                </h2>

                <p className={styles.message}>
                    {isSuccess 
                        ? "Thank you for showing interest in our product. Our team will contact you shortly."
                        : "Unfortunately, your details could not be submitted. Please try again or contact us directly."}
                </p>

                <button 
                    onClick={onClose} 
                    className={`${styles.button} ${isSuccess ? styles.successBtn : styles.failureBtn}`}
                >
                    {isSuccess ? 'Close' : 'Try Again'}
                </button>
            </div>
        </div>,
        document.body
    );
};

export default PaymentStatusModal;
