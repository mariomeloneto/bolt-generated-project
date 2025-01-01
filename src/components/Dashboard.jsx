import React, { useState } from 'react';
    import { useAuth } from '../App';

    function Dashboard() {
      const { user, logout } = useAuth();
      const [appointments, setAppointments] = useState([]);
      const [newAppointment, setNewAppointment] = useState({
        patientName: '',
        date: '',
        time: '',
      });

      const handleInputChange = (e) => {
        setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
      };

      const addAppointment = () => {
        setAppointments([...appointments, newAppointment]);
        setNewAppointment({ patientName: '', date: '', time: '' });
      };

      return (
        <div className="container">
          <h1>Bem-vindo(a), {user?.username}!</h1>
          <h2>Adicionar Consulta</h2>
          <label>Nome do Paciente:</label>
          <input
            type="text"
            name="patientName"
            value={newAppointment.patientName}
            onChange={handleInputChange}
          />
          <label>Data:</label>
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleInputChange}
          />
          <label>Hora:</label>
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
          />
          <button onClick={addAppointment}>Adicionar Consulta</button>

          <h2>Consultas</h2>
          <table>
            <thead>
              <tr>
                <th>Nome do Paciente</th>
                <th>Data</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={logout}>Sair</button>
        </div>
      );
    }

    export default Dashboard;
