// AuthContext.js

import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (token , userId) => {
    dispatch({ type: 'LOGIN', payload: { token , userId} });
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

// // AuthContext.js

// import { createContext, useContext, useReducer, useEffect } from 'react';

// const AuthContext = createContext();

// const initialState = {
//   isAuthenticated: false,
//   token: null,
//   userId: null,
// };

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         isAuthenticated: true,
//         token: action.payload.token,
//         userId: action.payload.userId,
//       };
//     case 'LOGOUT':
//       return initialState;
//     default:
//       return state;
//   }
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   // Load authentication state from local storage on component mount
//   useEffect(() => {
//     console.log('AuthProvider: useEffect - Loading authentication state from local storage...');
//     const storedAuthState = localStorage.getItem('authState');
//     if (storedAuthState) {
//       const parsedAuthState = JSON.parse(storedAuthState);
//       console.log('AuthProvider: useEffect - Parsed authentication state:', parsedAuthState);
//       dispatch({ type: 'LOGIN', payload: parsedAuthState });
//     }
//   }, []); // Run only once on mount, no dependencies

//   // Save authentication state to local storage whenever it changes
//   useEffect(() => {
//     if (state.token) {
//       console.log('AuthProvider: useEffect - Saving authentication state to local storage...', state);
//       localStorage.setItem('authState', JSON.stringify(state));
//       console.log('Token after saving to local storage:', state.token);
//     }
//   }, [state]);

//   const login = (token, userId) => {
//     dispatch({ type: 'LOGIN', payload: { token, userId } });
//   };

//   const logout = () => {
//     dispatch({ type: 'LOGOUT' });
//   };

//   return (
//     <AuthContext.Provider value={{ ...state, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export { AuthProvider, useAuth };
