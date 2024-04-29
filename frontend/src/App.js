import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Help Desk Support System</h1>
          <nav>
            <ul>
              <li>
                <Link to="/submit-ticket">Submit a Ticket</Link>
              </li>
              <li>
                <Link to="/view-tickets">View Tickets</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/submit-ticket" element={<TicketForm />} />
            <Route path="/view-tickets" element={<TicketList />} />
            <Route path="/" element={<WelcomeMessage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function WelcomeMessage() {
  return (
    <div>
      <h2>Welcome to Richard's Help Desk System</h2>
      <p>Please use the navigation menu to submit or view tickets.</p>
    </div>
  );
}

export default App;
