"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './PricingCards.css';

const PricingCards = () => {
  const [isClient, setIsClient] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form refs to capture user input
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const phoneRef = React.useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [selectedPlan, setSelectedPlan] = useState({
    name: 'Basic Plan',
    price: '₹ 20,000',
    amount: '20000', // numeric string for API
    iconColor: '#333',
    iconLetter: 'B'
  });

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/pricing');
        if (response.ok) {
          const data = await response.json();
          setPlans(data);
        } else {
          console.error('Failed to fetch pricing plans');
        }
      } catch (error) {
        console.error('Error fetching pricing plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const handleBuyNow = (plan) => {
    setSelectedPlan({
      name: plan.title,
      price: `₹ ${plan.price}`,
      amount: plan.amount,
      iconColor: plan.gradVar,
      iconLetter: plan.letter
    });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await loadRazorpay();

    if (!res) {
      // alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    // Capture form data
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    if (!name || !email || !phone) {
      // alert('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Create Order
    const result = await fetch('/api/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: selectedPlan.amount,
        currency: 'INR',
        receipt: `receipt_${Date.now()}`
      }),
    });

    const data = await result.json();

    if (!data.orderId) {
      // alert(data.error || 'Server error. Are you online?');
      setLoading(false);
      return;
    }

    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    if (!key) {
      // alert("Error: Razorpay Key ID is not defined. Please check your .env file and restart the server.");
      setLoading(false);
      return;
    }

    // Open Razorpay
    const options = {
      key: key, // Use NEXT_PUBLIC for frontend
      amount: data.amount,
      currency: "INR",
      name: "TGAYS Technology",
      description: `Payment for ${selectedPlan.name}`,
      order_id: data.orderId,
      handler: function (response) {
        // SUCCESS HANDLER
        const paymentData = {
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          plan_name: selectedPlan.name,
          amount: selectedPlan.amount,
          currency: 'INR',
          payment_status: 'success'
        };

        // Save payment data to database via API
        fetch('/api/payment/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(paymentData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Payment saved successfully:', data);
            // alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        })
        .catch((error) => {
            console.error('Error saving payment:', error);
            // Still alert success for the user as the payment itself worked
            // alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        })
        .finally(() => {
            closeModal();
            setLoading(false);
        });
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response){
        // alert("Payment Failed: " + response.error.description);
        setLoading(false);
    });
  };

  return (
    <div className="pricing-wrapper">
      <div className="container py-5">
        <div className="row text-center align-items-center justify-content-center header-row pb-5">
          <div className="col-12">
            <h2 className="text-uppercase fw-bold text-dark mb-2">Our Products</h2>
          </div>
        </div>

        <div className="row gap-4 gap-md-0">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4 col-lg-4 mb-4 mb-md-0">
              <div className={`pricing-card ${plan.type}-card`}>
                <div className="card-header-img">
                  <img src={plan.img} alt={`${plan.type} Plan`} className="img-fluid" />
                </div>
                <div className={`price-bubble ${plan.bubbleClass}`}>
                  <span className="currency">₹</span><span className="amount">{plan.price}</span>
                  <div className="period">PER MONTH</div>
                </div>
                <div className="card-body pt-5 pb-4 px-3">
                  <h3 className="plan-title text-uppercase fw-bold mb-4 mt-4">{plan.title}</h3>

                  <div className="mb-3 fw-bold text-start ps-3">Product Highlights:</div>

                  <ul className="list-unstyled feature-list text-start mx-auto feature-list-items">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={feature.active ? '' : 'disabled'}>
                        <i className={`fas ${feature.active ? 'fa-check text-success' : 'fa-times text-danger'} me-2`}></i>
                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`btn btn-primary btn-round ${plan.btnClass} mt-4`}
                    onClick={() => handleBuyNow(plan)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Modal */}
      {modalOpen && isClient && createPortal(
        <>
          <div className="modal-backdrop show" style={{ zIndex: 1050, opacity: 0.5 }}></div>
          <div 
            className="modal show pricing-modal" 
            id="paymentModal" 
            tabIndex="-1" 
            aria-labelledby="paymentModalLabel" 
            aria-modal="true" 
            role="dialog" 
            style={{ display: 'block', zIndex: 1055, opacity: 1 }}
            onClick={closeModal}
          >
            <div 
              className="modal-dialog modal-xl modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content border-0 shadow-lg checkout-modal">
                <div className="modal-body p-0">
                  <div className="row g-0">
                    {/* Left Column: Details */}
                    <div className="col-lg-7 p-5 left-panel">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h3 className="fw-bold m-0">Checkout</h3>
                      </div>

                      <form id="checkoutForm" onSubmit={handlePayment}>
                        {/* Shipping Details Section */}
                        <h6 className="section-label mb-4">SHIPPING DETAILS</h6>

                        <div className="mb-3">
                          <input type="text" className="form-control" placeholder="Full Name" required ref={nameRef} />
                        </div>
                        <div className="mb-3">
                          <input type="email" className="form-control" placeholder="Enter Your email" required ref={emailRef} />
                        </div>
                        <div className="mb-4">
                          <input type="text" className="form-control" placeholder="Phone No" required ref={phoneRef} />
                        </div>

                        <button 
                          type="submit" 
                          className="btn btn-purchase w-100 py-3 text-uppercase fw-bold mt-2" 
                          id="payButton"
                          disabled={loading}
                        >
                          {loading ? 'Processing...' : 'SUBMIT'}
                        </button>
                      </form>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="col-lg-5 p-5 right-panel bg-light">
                      <h6 className="section-label mb-5 text-muted">YOUR ORDER </h6>

                      {/* Order Item */}
                      <div className="d-flex align-items-center justify-content-between mb-4 order-item">
                        <div className="d-flex align-items-center">
                          <div 
                            className="item-square me-3 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
                            id="planIcon"
                            style={{ background: selectedPlan.iconColor }}
                          >
                            {selectedPlan.iconLetter}
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold" id="orderPlanName">{selectedPlan.name}</h6>
                            <small className="text-muted">Monthly Subscription</small>
                          </div>
                        </div>
                        <div className="fw-bold" id="orderPlanPrice">{selectedPlan.price}</div>
                      </div>

                      {/* Static Upsell Items */}
                      <div className="d-flex align-items-center justify-content-between mb-4 order-item opacity-50">
                        <div className="d-flex align-items-center">
                          <div className="item-square me-3 bg-success d-flex align-items-center justify-content-center text-white fw-bold shadow-sm">
                            S
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold">Support Add-on</h6>
                            <small className="text-muted">24/7 Priority</small>
                          </div>
                        </div>
                        <div className="fw-bold">₹ 0.00</div>
                      </div>

                      <hr className="my-4 border-secondary opacity-25" />

                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold small">Total Price</span>
                        <span className="fw-bold" id="orderTotal">{selectedPlan.price}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2 text-muted small">
                        <span>Shipping</span>
                        <span>₹0.00</span>
                      </div>
                      <div className="d-flex justify-content-between mb-5 fw-bold">
                        <span>Total</span>
                        <span id="orderFinalTotal">{selectedPlan.price}</span>
                      </div>

                    </div>

                    {/* Close Button Absolute */}
                    <button 
                      type="button" 
                      className="btn-close position-absolute top-0 end-0 m-4" 
                      aria-label="Close"
                      onClick={closeModal}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
};

export default PricingCards;
