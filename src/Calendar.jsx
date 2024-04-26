// Calendar.jsx
import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import ViewModal from './ViewModal.jsx'; // Import your modal component
import './App.css'; // Import CSS file for customizing calendar styles

const Calendar = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle click on a calendar tile
  const handleTileClick = (value) => {
    setSelectedDate(value);
  };

  // Function to filter events for the selected date
  const filteredEvents = events.filter(event => event.date === selectedDate?.toDateString());

  return (
    <div className="calendar-container">
      <h2 className="calendar-heading">Calendar of Events</h2>
      <div className="calendar">
        <CalendarComponent
          onClickDay={handleTileClick} // Call handleTileClick when a day is clicked
        />
      </div>
      {/* Modal to display events for the selected date */}
      {selectedDate && <ViewModal date={selectedDate} events={filteredEvents} onClose={() => setSelectedDate(null)} />}
    </div>
  );
};

export default Calendar;
