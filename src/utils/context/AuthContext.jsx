import React, { createContext, useState, useEffect } from 'react'

// URL CONSTANT
import URLS from '../constants/Api'
import AXIOS_INSTANCE from '../services/AxiosInstance'

// Créer un contexte d'authentification
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  // Etat pour stocker les informations de l'user connecté.
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  // Fonction pour gérer l'authentification de l'user
  const login = async (userDataForm) => {
    try {
      setIsLoading(true)
      // axios
      const { data, status } = await AXIOS_INSTANCE.post(URLS.POST_LOGIN, userDataForm);

      if(status === 200){
        // Mettre à jours l'état du state (auth) avec les données de l'user
        setAuth(data);

        // Stockez les données de l'user en localstorage
        localStorage.setItem('auth', JSON.stringify(auth));

        setIsLoading(false)
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false)
    }
  }

  const logout = () => {
    setAuth(null) // Réinitialise l'état de l'user à null
    localStorage.removeItem('auth') // supprimer les informations de l'user dans le local storage
  }

  return (
    <AuthContext.Provider value={{ login, logout, auth, isLoading }}>
      {children}
    </AuthContext.Provider> 
  )
}