import React, { useState, createContext, useContext } from 'react';
    import { Routes, Route, useNavigate, Link } from 'react-router-dom';
    import LoginPage from './components/LoginPage';
    import RegisterPage from './components/RegisterPage';
    import Dashboard from './components/Dashboard';

    const AuthContext = createContext(null);

    function AuthProvider({ children }) {
      const [user, setUser] = useState(null);
      const navigate = useNavigate();

      const login = (userData) => {
        setUser(userData);
        navigate('/dashboard');
      };

      const logout = () => {
        setUser(null);
        navigate('/login');
      };

      const register = (userData) => {
        setUser(userData);
        navigate('/dashboard');
      };

      return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
          {children}
        </AuthContext.Provider>
      );
    }

    function useAuth() {
      return useContext(AuthContext);
    }

    function App() {
      return (
        <AuthProvider>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Cadastrar</Link>
          </nav>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      );
    }

    function ProtectedRoute({ children }) {
      const { user } = useAuth();
      const navigate = useNavigate();

      if (!user) {
        navigate('/login');
        return null;
      }

      return children;
    }

    export default App;
    export { useAuth };
