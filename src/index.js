import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import ErrorPage from './pages/error'
import QueOnda from './pages/clock'
import Timer from './pages/timer'
import Weather from './pages/weather'
import Layout from './components/navBar'

const AppLayout = () => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Weather />
      },
      {
        path: 'clock',
        element: <QueOnda />
      },
      {
        path: 'timer',
        element: <Timer />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
