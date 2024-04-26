import React from 'react';

const ViewModal = ({ date, events, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Events for {date.toLocaleDateString()}</h2>
        {events.map(event => (
          <div key={event.id} className="event">
            {/* Dummy image */}
            <img src="https://via.placeholder.com/150" alt="Event" />

            {/* Title and description */}
            <div>
              <p className="event-title">{event.title}</p>
              <p className="event-description">{event.description}</p>
            </div>

            {/* Percentage of capacity */}
            <p>Capacity: {event.attendees.length} / {event.maxCapacity}</p>
            <p>Percentage of Capacity: {((event.attendees.length / event.maxCapacity) * 100).toFixed(2)}%</p>

            {/* You can add "Read More" buttons here */}
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ViewModal;
