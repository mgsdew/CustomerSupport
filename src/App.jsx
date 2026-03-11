import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import { ToastContainer, toast } from 'react-toastify';

const fetchTickets = async () =>{
  const res = await fetch("/support-tickets.json")
  return  res.json()
}

const ticketsPromise = fetchTickets();

function App() {
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAddTicket = (ticket) => {
    if (inProgressTickets.find(t => t.id === ticket.id)) {
      toast.error(`"${ticket.title}" is already in progress!`);
      return;
    }
    setInProgressTickets(prev => [...prev, ticket]);
    toast.success(`"${ticket.title}" added to In-Progress!`);
  };

  const handleComplete = (ticket) => {
    setInProgressTickets(prev => prev.filter(t => t.id !== ticket.id));
    setResolvedTickets(prev => [...prev, ticket]);
    toast.info(`"${ticket.title}" marked as Resolved!`);
  };

  return (
    <div className="app-container">

      {/* Navbar Section */}
      <Navbar />

      {/* Banner Section */}
      <Banner inProgressCount={inProgressTickets.length} resolvedCount={resolvedTickets.length} />

      {/* Body Section */}
      <div className="body-section">
        <Container
          ticketsPromise={ticketsPromise}
          onAddTicket={handleAddTicket}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          onComplete={handleComplete}
        />
        <ToastContainer position="top-center" />
      </div>

       {/* Footer Section */}
      <Footer />

    </div>
  )
}

export default App
