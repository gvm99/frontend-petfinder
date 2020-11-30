import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

interface SignInData {
  username: string;
  password: string;
}

interface ResponseData {
  exp: string;
  token: string;
}
interface IAuthContextData {
  signed: boolean;
  loading: boolean;
  signIn: (singInData: SignInData) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const storageToken = localStorage.getItem('@PetFinder:token');

    if (storageToken) {
      const { token, exp } = JSON.parse(storageToken);

      const isTokenExpired = new Date(exp).getTime() < Date.now();

      if (isTokenExpired) localStorage.removeItem('@PetFinder:token');
      else {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setSigned(true);
      }
    }

    setLoading(false);
  }, []);

  async function signIn(signInData: SignInData) {
    try {
      const { data } = await api.post<ResponseData>('session', signInData);

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      const token = {
        token: data.token,
        exp: data.exp,
      };

      localStorage.setItem('@PetFinder:token', JSON.stringify(token));
      localStorage.setItem('@PetFinder:usuario', JSON.stringify({username:signInData.username}));

      setSigned(true);
      setLoading(false);
    } catch (error) {
      if (error.response) throw error.response;
      else throw error;
    }
  }

  async function signOut() {
    localStorage.removeItem('@PetFinder:token');
    api.defaults.headers.Authorization = undefined;
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
