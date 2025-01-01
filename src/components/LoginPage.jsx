import React, { useState } from 'react';
    import { useAuth } from '../App';

    function LoginPage() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { login } = useAuth();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'doctor' && password === 'password') {
          login({ username: 'doctor' });
        } else {
          setError('Usuário ou senha inválidos');
        }
      };

      return (
        <div className="container">
          <h2>Login</h2>
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
            <button type="submit">Entrar</button>
          </form>
        </div>
      );
    }

    export default LoginPage;
