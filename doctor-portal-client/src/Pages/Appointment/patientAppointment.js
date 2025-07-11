import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Appointments() {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    reason: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    currentPatient: 'yes'
  });

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      image: 'doctor1.jpg'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      image: 'doctor2.jpg'
    },
    {
      id: 3,
      name: 'Dr. Emily Wilson',
      specialty: 'Pediatrics',
      image: 'doctor3.jpg'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment submitted:', { ...formData, doctor: selectedDoctor });
    alert('Appointment request submitted successfully!');
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="section-title">Schedule an Appointment</h1>
      
      <div className="appointment-container">
        <div className="appointment-form">
          <h3 className="form-title">Appointment Request</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  className="form-control" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  className="form-control" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input 
                  type="date" 
                  id="dob" 
                  name="dob"
                  className="form-control" 
                  value={formData.dob}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="form-control" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="form-control" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="reason">Reason for Visit</label>
              <textarea 
                id="reason" 
                name="reason"
                className="form-control" 
                rows="3"
                value={formData.reason}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input 
                type="date" 
                id="preferredDate" 
                name="preferredDate"
                className="form-control" 
                value={formData.preferredDate}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time</label>
              <select 
                id="preferredTime" 
                name="preferredTime"
                className="form-control" 
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (8am-12pm)</option>
                <option value="afternoon">Afternoon (12pm-4pm)</option>
                <option value="evening">Evening (4pm-7pm)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Preferred Location</label>
              <select 
                id="location" 
                name="location"
                className="form-control" 
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a location</option>
                <option value="main">Northwestern Memorial Hospital</option>
                <option value="outpatient">Northwestern Outpatient Center</option>
                <option value="lakeforest">Lake Forest Hospital</option>
                <option value="dupage">Central DuPage Hospital</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Are you a current patient?</label>
              <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input 
                    type="radio" 
                    name="currentPatient" 
                    value="yes" 
                    checked={formData.currentPatient === 'yes'}
                    onChange={handleInputChange}
                  /> Yes
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input 
                    type="radio" 
                    name="currentPatient" 
                    value="no" 
                    checked={formData.currentPatient === 'no'}
                    onChange={handleInputChange}
                  /> No
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Submit Request
            </button>
          </form>
        </div>
        
        <div className="appointment-info">
          <h3 className="info-title">Appointment Information</h3>
          
          <div className="info-item">
            <h4>Before Your Visit</h4>
            <p>Please arrive 15 minutes early for your appointment to complete any necessary paperwork.</p>
          </div>
          
          <div className="info-item">
            <h4>What to Bring</h4>
            <ul style={{ marginLeft: '20px', color: '#666' }}>
              <li>Photo ID</li>
              <li>Insurance card</li>
              <li>List of current medications</li>
              <li>Any relevant medical records</li>
            </ul>
          </div>
          
          <div className="info-item">
            <h4>Cancellation Policy</h4>
            <p>Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.</p>
          </div>
          
          <div className="doctor-selection">
            <h4>Available Doctors</h4>
            {doctors.map(doctor => (
              <div 
                key={doctor.id}
                className={`doctor-card ${selectedDoctor?.id === doctor.id ? 'selected' : ''}`}
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div 
                  className="doctor-image" 
                  style={{ backgroundImage: `url(${doctor.image})` }}
                ></div>
                <div className="doctor-details">
                  <h4>{doctor.name}</h4>
                  <p>{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;