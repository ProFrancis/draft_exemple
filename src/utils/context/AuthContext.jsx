import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

// URL CONSTANT
import URLS from '../constants/Api'
import AXIOS_INSTANCE from '../services/AxiosInstance'

// Créer un contexte d'authentification
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  // Etat pour stocker les informations de l'user connecté.
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    isLoggedIn()
  }, [])

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
        localStorage.setItem('auth', JSON.stringify(data));

        // REDIRIGE L'USER VERS LA PAGE D'ACCUEIL
        navigate(`/`);

        setIsLoading(false)
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false)
    }
  }

  const isLoggedIn = () => {
    setIsLoading(true)
    // Récupére les données de l'user depuis le localstorage
    const currentUser = localStorage.getItem("auth");
    const currentUserParsed = currentUser ? JSON.parse(currentUser) : null
    setAuth(currentUserParsed)
    setIsLoading(false)
  }

  const logout = () => {
    setIsLoading(true)

    setAuth(null) // Réinitialise l'état de l'user à null
    localStorage.removeItem('auth') // supprimer les informations de l'user dans le local storage

    // REDIRIGE L'USER VERS LA PAGE D'ACCUEIL
    navigate(`/`);
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider value={{ login, logout, auth, isLoading }}>
      {children}
    </AuthContext.Provider> 
  )
}