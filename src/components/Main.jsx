import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { AnimeContextProvider } from '../context/AnimeContext'
import { AnimeForm } from './AnimeForm'
import { ShowAnimes } from './ShowAnimes'

export const Main = () => {


  return (
    <AnimeContextProvider>
      <Router>
        <>
        <nav>
          <ul>
            <li>
              <Link to={`/create-form`}>Agregar anime</Link>
            </li>
            <li><Link to={`/home`}>Listado de animes vistos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
              exact
              path="/create-form"
              element={<AnimeForm />}
          />

          <Route
              exact
              path="/home"
              element={<ShowAnimes />}
          />

          <Route
              path="*"
              element={<ShowAnimes />}
          />
        </Routes>
        </>
      </Router>
    </AnimeContextProvider>
  )
}
