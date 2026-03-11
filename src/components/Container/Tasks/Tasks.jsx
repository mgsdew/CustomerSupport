import React from 'react';
import './Tasks.css';

const Tasks = ({ inProgressTickets = [], resolvedTickets = [], onComplete }) => {
  return (
    <div className="tasks-section">
      <h2 className="tasks-heading">Task Status</h2>
      {inProgressTickets.length === 0 ? (
        <p className="tasks-empty">No tickets in progress.</p>
      ) : (
        <ul className="tasks-list">
          {inProgressTickets.map(ticket => (
            <li key={ticket.id} className="tasks-item">
              <span className="tasks-title">{ticket.title}</span>
              <button
                className="btn btn-success btn-sm tasks-complete-btn"
                onClick={() => onComplete(ticket)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}

      {resolvedTickets.length > 0 && (
        <div className="resolved-section">
          <h2 className="tasks-heading resolved-heading">Resolved Tasks</h2>
          <ul className="tasks-list">
            {resolvedTickets.map(ticket => (
              <li key={ticket.id} className="tasks-item resolved-item">
                <p className='tasks-resolved'>{ticket.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tasks;
