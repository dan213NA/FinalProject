// EventManagement.jsx
import React, { useState } from 'react';
import AddReminder from './AddReminder'; // Import the AddReminder component
import './App.css'; // Import CSS file for styling

const EventManagement = ({ addEvent, deleteEvent }) => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle adding a new event
  const handleAddEvent = (event) => {
    setEvents([...events, event]);
    addEvent(event);
    setShowModal(false);
  };

  // Function to handle registering for an event
  const handleRegister = (eventId) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          attendees: [...event.attendees, { id: Math.random(), name: 'New Attendee' }], // Dummy attendee data
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };
  //yes or
  // Function to handle unregistering from an event
  const handleUnregister = (eventId, attendeeId) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          attendees: event.attendees.filter((attendee) => attendee.id !== attendeeId),
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="event-management">
      {/* Button to toggle modal visibility */}
      <button onClick={() => setShowModal(true)} className="event-button">
        Add Reminder {/* Update the button text */}
      </button>
      {/* Modal */}
      {showModal && <AddReminder addEvent={handleAddEvent} onClose={handleCloseModal} />} {/* Update component name */}
      {/* Display and manage existing events */}
      {events.map((event) => (
        <div key={event.id} className="event">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Attendees: {event.attendees.length} / {event.maxCapacity}</p>
          <button onClick={() => handleRegister(event.id)}>Register</button>
          {event.attendees.map((attendee) => (
            <div key={attendee.id}>
              <p>{attendee.name}</p>
              <button onClick={() => handleUnregister(event.id, attendee.id)}>Unregister</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventManagement;
