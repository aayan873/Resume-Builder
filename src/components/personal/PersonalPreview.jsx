import React from "react";
import "../../styles/PersonalPreview.css";

function PersonalPreview({ formData }) {
  return (
    <div className="personal">
      <h1 className="name">{formData.fullName}</h1>
      <div className="contact">
        {formData.email && (
          <div>
            <i className="fa-solid fa-envelope" />
            <span>{formData.email}</span>
          </div>
        )}

        {formData.phone && (
          <div>
            <i className="fa-solid fa-phone" />
            <span>{formData.phone}</span>
          </div>
        )}

        {formData.address && (
          <div>
            <i className="fa-solid fa-location-dot" />
            <span>{formData.address}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalPreview;