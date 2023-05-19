import React from 'react';
import './DeliveryInfo.css';

export default function DeliveryInfo() {
  return (
    <div className="DeliveryInfo">
      <div className="DeliveryInfo__card">
        <h3>Free Shipping</h3>
        <p>Get free standard shipping on all orders over $50.</p>
      </div>
      <div className="DeliveryInfo__card">
        <h3>Fast Delivery</h3>
        <p>Get your order delivered within 2-3 business days.</p>
      </div>
      <div className="DeliveryInfo__card">
        <h3>Easy Returns</h3>
        <p>Not satisfied with your order? Return it within 30 days for a full refund.</p>
      </div>
    </div>
  );
}

