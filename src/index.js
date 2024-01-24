import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Header, PrivateRoute, PublicRoute } from './components'
import './global.css'
import { ProfilePage, HomePage, ChatPage, ErrorPage, GistsPage, LoginPage } from './pages'
import { PersistGate } from 'redux-persist/integration/react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './api/firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  // palette: {
  //   // primary: {
  //   //   main: '#000ff'
  //   // }
  // }
})

const App = () => {
  const [session, setSession] = useState(null)

  const isAuth = session?.email

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    })

  }, [])

  return <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header isAuthor={isAuth}/>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<PrivateRoute isAuth={isAuth}>
              <ProfilePage />
            </PrivateRoute>} />
            <Route path='/gists' element={<PrivateRoute isAuth={isAuth}>
              <GistsPage />
            </PrivateRoute>} />
            <Route path='/login/*' element={<PublicRoute isAuth={isAuth}>
              <LoginPage />
            </PublicRoute>} />
            <Route path='/chats/*' element={<PrivateRoute isAuth={isAuth}>
              <ChatPage />
            </PrivateRoute>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
}

root.render(
  <App />
);