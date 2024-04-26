// AddReminder.jsx
import React, { useState } from 'react';

const AddReminder = ({ addReminder, onClose }) => {
  const [formData, setFormData] = useState({ title: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.date) {
      addReminder({ id: Date.now(), ...formData });
      setFormData({ title: '', date: '' });
      onClose(); // Close the modal after submitting the form
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Reminder</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Reminder Title" 
            value={formData.title} 
            onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
            className="event-input"
          />
          <input 
            type="datetime-local" 
            value={formData.date} 
            onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
            className="event-input"
          />
          <div>
            <button type="submit" className="event-button">Save Reminder</button>
            <button type="button" onClick={onClose} className="event-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReminder;
