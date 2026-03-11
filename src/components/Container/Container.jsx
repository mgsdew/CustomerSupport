import { use, Suspense } from 'react';
import TicketCard from './TicketCard/TicketCard';
import Tasks from './Tasks/Tasks';
import './Container.css';


const Container = ({ ticketsPromise, onAddTicket, inProgressTickets, resolvedTickets, onComplete }) => {
    
  const ticketsData = use(ticketsPromise);
  const visibleTickets = ticketsData.filter(t => !resolvedTickets.find(r => r.id === t.id));

  return (
    <div className="container-layout">
      <div className="container-tickets">
        <h2 className="tickets-heading">Customer Tickets</h2>
        <Suspense fallback={<p>Loading tickets...</p>}>
            <div className="tickets-grid">
            {visibleTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} onAddTicket={onAddTicket} />
            ))}
            </div>
        </Suspense>
      </div>
      <div className="container-tasks">
        <Tasks inProgressTickets={inProgressTickets} resolvedTickets={resolvedTickets} onComplete={onComplete} />
      </div>
    </div>
  );
};

export default Container;
