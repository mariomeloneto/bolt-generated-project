import React, { useState } from 'react';
    import { useAuth } from '../App';

    function RegisterPage() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { register } = useAuth();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
          register({ username });
        } else {
          setError('Por favor, preencha todos os campos.');
        }
      };

      return (
        <div className="container">
          <h2>Cadastrar</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>Usuário:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      );
    }

    export default RegisterPage;
