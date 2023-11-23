import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// ? publicRouter
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Logar from './pages/Logar';
// ! protectedRoute
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import NewUser from './pages/NewUser';
import Logout from './pages/Logout';

import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,   RouterProvider,} from 'react-router-dom';

const publicRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {path: '/', element: <Home />},
    {path: '/home', element: <Home />},
    {path: '/login', element: <Login />},
    {path: '/logar', element: <Logar />},
    {path: '/*', element: <ErrorPage />}
  ]
}])

const protectedRoute = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {path: '/', element: <Users />},
    {path: '/users', element: <Users />},
    {path: '/users/:id', element: <UserDetails />},
    {path: '/newuser', element: <NewUser />},
    {path: '/logout', element: <Logout />},
    {path: '/*', element: <ErrorPage />}
  ]
}
  
])

const route = localStorage.getItem('@1app/displayname') === null ? publicRouter : protectedRoute;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}>
    <App />

    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
