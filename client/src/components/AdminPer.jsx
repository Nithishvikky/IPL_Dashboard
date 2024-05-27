import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AdminPer() {
    const [data, setData] = useState({
        id: '',
        teamName: '',
        matches: '',
        win: '',
        loss: '',
        nrr: '',
        pointss: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8082/update/${data.id}`, data)
            .then((response) => {
                console.log(response.data);
                setData({
                      id: '',
                      teamName: '',
                      matches: '',
                      win: '',
                      loss: '',
                      nrr: '',
                      pointss: ''
                 });
                 alert("Now go and check the point table");
                // Handle success
            })
            .catch((error) => {
                console.error('Error updating data:', error);
            });
    };

    return (
        <div className="container mt-3">
            <Link to="/" className="btn btn-primary mb-3">HomePage</Link>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Team ID:</label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={data.id}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="teamName" className="form-label">Team Name:</label>
                    <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={data.teamName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="matches" className="form-label">Matches:</label>
                    <input
                        type="number"
                        id="matches"
                        name="matches"
                        value={data.matches}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="win" className="form-label">Win:</label>
                    <input
                        type="number"
                        id="win"
                        name="win"
                        value={data.win}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loss" className="form-label">Loss:</label>
                    <input
                        type="number"
                        id="loss"
                        name="loss"
                        value={data.loss}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nrr" className="form-label">NRR:</label>
                    <input
                        type="number"
                        step="0.01"
                        id="nrr"
                        name="nrr"
                        value={data.nrr}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pointss" className="form-label">Points:</label>
                    <input
                        type="number"
                        id="pointss"
                        name="pointss"
                        value={data.pointss}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}
