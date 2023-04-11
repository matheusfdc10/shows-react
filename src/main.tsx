import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home'
import Video from './pages/Video'

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shows/:themaID/show/:id",
        element: <Video />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
