// AuthContext.js
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('auth_token') || null,
  userId: localStorage.getItem('userId') || null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('auth_token', action.payload.token);
      localStorage.setItem('userId',action.payload.userId);

      return {
        isAuthenticated: true,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case 'LOGOUT':
      localStorage.removeItem('auth_token');
      return initialState;
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (token, userId) => {
    dispatch({ type: 'LOGIN', payload: { token, userId } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
