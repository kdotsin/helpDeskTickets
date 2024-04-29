import React, { useState } from 'react';
import axios from 'axios';

function TicketForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const ticketData = {
            name,
            email,
            description,
        };
        try {
            await axios.post('http://localhost:8000/api/tickets/', ticketData);
            alert('Ticket Submitted Successfully!');
            setName('');
            setEmail('');
            setDescription('');
        } catch (error) {
            alert('Failed to submit the ticket');
            console.error('There was an error!', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit a Ticket</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Description:
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TicketForm
