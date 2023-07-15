import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Main from './components/Main'
import Quiz from './components/Quiz'
import Results from './components/Results'
import './styles/App.css'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main />
    },
    {
      path:'/quiz',
      element:<Quiz />
    },
    {
      path:'/result',
      element:<Results />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
