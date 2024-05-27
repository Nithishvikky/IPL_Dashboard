import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pointstable() {
    const [point, setPoints] = useState([]);

    useEffect(() => {
        fetch('https://serverhosting-qnx8.onrender.com/points')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setPoints(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4 mb-3">Points Table</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Team Name</th>
                        <th>Matches</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>NRR</th>
                    </tr>
                </thead>
                <tbody>
                    {point.map(point => (
                        <tr key={point.id}>
                            <td>{point.id}</td>
                            <td>{point.teamName}</td>
                            <td>{point.matches}</td>
                            <td>{point.win}</td>
                            <td>{point.loss}</td>
                            <td>{point.nrr}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
