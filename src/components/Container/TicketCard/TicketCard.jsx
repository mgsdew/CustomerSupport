import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import './TicketCard.css';

const statusBadge = {
  'Open': 'badge-success',
  'In-Progress': 'badge-warning',
  'Resolved': 'badge-info',
};

const priorityColor = {
  'HIGH PRIORITY': 'priority-high',
  'MEDIUM PRIORITY': 'priority-medium',
  'LOW PRIORITY': 'priority-low',
};

const TicketCard = ({ ticket, onAddTicket }) => {
  const { id, title, description, customer, priority, status, createdAt } = ticket;
  return (
    <div className="card bg-base-100 border border-gray-200 shadow-none hover:shadow-md transition-shadow cursor-pointer" onClick={() => onAddTicket(ticket)}>
      <div className="card-body p-4 gap-2">
        <div className="flex justify-between items-start gap-2">
          <span className="ticket-title">{title}</span>
          <span className={`badge ${statusBadge[status] || 'badge-ghost'} badge-sm flex-shrink-0`}>{status}</span>
        </div>
        <p className="ticket-desc">{description}</p>
        <div className="ticket-card-footer">
          #{id} <span className={`ticket-priority ${priorityColor[priority] || ''}`}>{priority}</span>
          <span className="ticket-customer">
            <FontAwesomeIcon icon={faUser} className="ticket-footer-icon" />
            {customer}
          </span>
          <span className="ticket-date">
            <FontAwesomeIcon icon={faCalendarDays} className="ticket-footer-icon" />
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
