import React from "react";

const OrderDetails = () => {
  return (
    <div>
      {/* Status Section */}
      <div>
        <h1>Status</h1>
        {/* Order Status */}
        <div>
          <h2>Order Status:</h2>
          <p>Processing</p> 
        </div>

        {/* Order Placement Information */}
        <div>
          <h2>Placed At:</h2>
          <p>2023-01-01 12:34 PM</p> 
        </div>

        {/* Order Delivery Information */}
        <div>
          <h2>Delivered At:</h2>
          <p>2023-01-02 02:45 PM</p> 
        </div>
      </div>

      {/* Payment Section */}
      <div>
        <h1>Payment</h1>

        {/* Payment Method */}
        <div>
          <h2>Payment Method:</h2>
          <p>Credit Card</p> 
        </div>

        {/* Payment Reference */}
        <div>
          <h2>Payment Reference:</h2>
          <p>1234-5678-9012-3456</p> 
        </div>

        {/* Payment Time */}
        <div>
          <h2>Paid At:</h2>
          <p>2023-01-01 01:00 PM</p> 
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
