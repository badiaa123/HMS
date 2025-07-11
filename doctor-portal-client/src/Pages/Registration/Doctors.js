//import React from 'react';

import React, { useState } from 'react';
import './DoctorSearch.css';

const DoctorSearch = () => {
  const [searchId, setSearchId] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

  const doctors = [
    {
      id: '0100',
      name: 'Dr. Zhang Wei',
      specialty: 'Cardiology',
      description: 'Nava certified cardiologist with 15 years of experience in treating complex heart conditions.',
      profileViews: 4,
    },
    {
      id: '01003',
      name: 'Dr. Li Na',
      specialty: 'Neurology',
      description: 'Specializes in treating neurological disorders including epilepsy and Parkinson\'s disease.',
      profileViews: 2,
    },
    {
      id: '01004',
      name: 'Dr. Wang Jian',
      specialty: 'Orthopedics',
      description: 'Expert in joint replacements and sports injuries with focus on minimally invasive techniques.',
      profileViews: 3,
    },
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.id.includes(searchId) &&
    (selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty)
  );

  const specialties = ['All Specialties', 'Cardiology', 'Neurology', 'Orthopedics'];

  const getCurrentDateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    
    return `${formattedHours}${formattedMinutes} ${ampm} ${month}/${day}/${year}`;
  };

  return (
    <div className="doctor-search-container">
      <h1>Search by doctor ID...</h1>
      
      <div className="specialties-dropdown">
        <select 
          value={selectedSpecialty} 
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          {specialties.map(specialty => (
            <option key={specialty} value={specialty}>{specialty}</option>
          ))}
        </select>
      </div>

      <div className="search-section">
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Enter doctor ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <div className="id-examples">
          <p>ID: 0100</p>
          <p>ID: 01003</p>
        </div>
      </div>

      <div className="doctors-list">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p className="specialty">{doctor.specialty}</p>
            <p className="description">{doctor.description}</p>
            
            <div className="actions">
              <span>Basis</span>
              <div>
                <span>{doctor.profileViews} Profile</span>
                <span>1 Remove</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>{getCurrentDateTime()}</p>
      </div>
    </div>
  );
};

export default DoctorSearch;