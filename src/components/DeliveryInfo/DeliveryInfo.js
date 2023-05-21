import React from 'react';
import './DeliveryInfo.css';

export default function DeliveryInfo() {
  return (
    <div className="DeliveryInfo">
      <div className="DeliveryInfo__card">
        <h3>Free Shipping</h3>
        <p>Enjoy free standard shipping on all orders over $50. No need to worry about extra costs!</p>
      </div>
      <div className="DeliveryInfo__card">
        <h3>Fast Delivery</h3>
        <p>Need your items quickly? We've got you covered. With our fast delivery service, you can expect your order to arrive within 2-3 business days.</p>
        <p>We understand the importance of timely delivery, especially when it comes to fashion. We work diligently to ensure that your items reach you as soon as possible.</p>
      </div>
      <div className="DeliveryInfo__card">
        <h3>Easy Returns</h3>
        <p>We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you can return it within 30 days for a full refund.</p>
        <p>Our hassle-free returns process makes it easy for you to initiate a return. Simply contact our customer support, and we'll guide you through the process.</p>
        <p>Please note that returned items should be in their original condition with all tags attached for a smooth refund process.</p>
      </div>
    </div>
  );
}


