import React, { useEffect, useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [local,setLocal] = useState({
    data:""
  })

  useEffect(() => {
    fetch(`https://serverhosting-qnx8.onrender.com/teams`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTeams(data);
        console.log(data);}
       )
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="containermt-3">
      <div className="row">
        {teams.map(team => (
          <div key={team.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text">No of players : {team.players}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
