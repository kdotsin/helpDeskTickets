import React, {useEffect, useState } from 'react';
import axios from 'axios'

function TicketList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchTickets();
    }, []);

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000/';

    const fetchTickets = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/tickets/`);
            setTickets(response.data);
        } catch (error) {
            console.error('Failed to fetch tickets', error);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            await axios.patch(`${apiUrl}/api/tickets/${id}/`, { status });
            fetchTickets();
        } catch (error) {
            console.error('Failed to update status', error);
        }
    };
    
    return (
        <div>
            <h2>Ticket List</h2>
            {tickets.map(ticket => (
                <div key={ticket.id}>
                    <h3>{ticket.name} ({ticket.status})</h3>
                    <p>{ticket.description}</p>
                    <button onClick={() => updateStatus(ticket.id, 'in_progress')}>Mark In Progress</button>
                    <button onClick={() => updateStatus(ticket.id, 'resolved')}>Mark Resolved</button>
                </div>
            ))}
        </div>
    );
}

export default TicketList;