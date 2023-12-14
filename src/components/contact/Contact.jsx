import React from "react";
import Popup from "reactjs-popup";

const Contact = () => {
  const handleSendButtonClick = () => {
    
  };

  return (
    <div>
      <h1>Contact Us</h1>
      
      
      <Popup
        trigger={<button type="button" onClick={handleSendButtonClick}>Send</button>}
        modal
        nested
      >
        {(close) => (
          <div className="popup-content">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div>
              
              <h2>Your Popup Content</h2>
              <p>This is your popup content.</p>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Contact;
