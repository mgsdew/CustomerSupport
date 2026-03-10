import React from 'react';
import Tickets from './Tickets/Tickets';
import Tasks from './Tasks/Tasks';
import './Container.css';

const Container = () => {
  return (
    <div className="container-layout">
      <div className="container-tickets">
        <Tickets />
      </div>
      <div className="container-tasks">
        <Tasks />
      </div>
    </div>
  );
};

export default Container;
