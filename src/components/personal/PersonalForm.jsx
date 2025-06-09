import { useState } from "react";
import "./PersonalForm.css"; 
import Input from "../Input";

const PersonalForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const key = e.target.getAttribute('data-key');
    setFormData({...formData, [key]: e.target.value,});
  };

  return (
    <form className="personal-details">
      <h2>Personal Details</h2>
      
      <Input
        type="text"
        id="full-name"
        labelText="Full name"
        placeholder="Full name"
        value={formData.fullName}
        onChange={handleChange}
        data-key="fullName"
      />

      <Input
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        data-key="email"
        recommended
      />

      <Input
        type="tel"
        id="phone-number"
        labelText="Phone number"
        placeholder="Enter phone number"
        value={formData.phone}
        onChange={handleChange}
        data-key="phone"
        recommended
      />

      <Input
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, Country"
        value={formData.address}
        onChange={handleChange}
        data-key="address"
        recommended
      />
      
    </form>
  );
}
export default PersonalForm;