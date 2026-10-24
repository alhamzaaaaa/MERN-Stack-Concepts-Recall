import React from 'react';
import './App.css';
import { useState } from 'react';
import QueueForm from './components/QueueForm';
import QueueDisplay from './components/QueueDisplay';

export default function App() {

  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {

    // Add the customer to the queue
    setQueue([...queue, {
      ...customer, id: Date.now(),
      status: "waiting"
    }]);

  }

  const updateStatus = (id, newStatus) => {
    // Update the status of a customer in the queue
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );

  }

  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id));
    // Remove the customer from the queue
  }

  return (
    <>
      <div>

        <header>

          <h1>Queue Management System</h1>
          <p>Manage your queue efficiently.</p>

        </header>

        <main>
          <QueueForm onAdd={addToQueue} />
          <QueueDisplay

            queue={queue}
            onUpdateStatus={updateStatus}
            onRemove={removeFromQueue}

          />
        </main>
      </div>
    </>
  )
}