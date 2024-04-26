import React, { useState } from 'react';
import Band from './Band';
import About from './About';
import Contact from './Contact';
import BiCalendar from './BiCalendar';
import Carousel from './Carousel';
import EventManagement from './EventManagement';
import Calendar from './Calendar';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Event 1',
      description: 'Description for Event 1',
      lat: 40.7128, // Latitude for New York City
      lng: -74.0060, // Longitude for New York City
      capacity: 50, // Capacity for Event 1
      attendees: [], // Initial empty array for attendees
      maxCapacity: 50, // Maximum capacity for Event 1
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description for Event 2',
      lat: 34.0522, // Latitude for Los Angeles
      lng: -118.2437, // Longitude for Los Angeles
      capacity: 100, // Capacity for Event 2
      attendees: [], // Initial empty array for attendees
      maxCapacity: 100, // Maximum capacity for Event 2
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'Description for Event 3',
      lat: 51.5074, // Latitude for London
      lng: -0.1278, // Longitude for London
      capacity: 30, // Capacity for Event 3
      attendees: [], // Initial empty array for attendees
      maxCapacity: 30, // Maximum capacity for Event 3
    },
  ]);

  const slides = [
    {
      image: 'image1.jpg',
      title: 'Slide 1',
      description: 'Description for slide 1',
      link: 'https://example.com/slide1',
    },
    {
      image: 'image2.jpg',
      title: 'Slide 2',
      description: 'Description for slide 2',
      link: 'https://example.com/slide2',
    },
    {
      image: 'image3.jpg',
      title: 'Slide 3',
      description: 'Description for slide 3',
      link: 'https://example.com/slide3',
    },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul>
          <li>
            <button className="nav-button" onClick={() => scrollToSection('home')}>Home</button>
            <button className="nav-button" onClick={() => scrollToSection('band')}>Bands</button>
            <button className="nav-button" onClick={() => scrollToSection('about')}>About Us</button>
            <button className="nav-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
            <button className="nav-button" onClick={() => scrollToSection('bCalendar')}>BiCalendar</button>
          </li>
        </ul>
      </nav>
      <h1>Event Horizon</h1>
      <div className="section" id="home">
        <h1>Carousel</h1>
        <Carousel slides={slides} />
        <h1>Event Management</h1>
        <EventManagement addEvent={addEvent} deleteEvent={deleteEvent} />
        <h1>Calendar</h1>
        <Calendar events={events} />
      </div>
      <div className="section" id="band">
        <Band />
        <Calendar events={events} />
      </div>
      <div className="section" id="about">
        <About />
        <Calendar events={events} />
      </div>
      <div className="section" id="contact">
        <Contact />
        <Calendar events={events} />
      </div>
      <div className="section" id="bCalendar">
        <BiCalendar />
        <Calendar events={events} />
      </div>
    </div>
  );
};

export default App;