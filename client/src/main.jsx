import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './Home.css'
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Books from './Pages/Books.jsx'
import AboutTheAuthor from './Pages/AboutTheAuthor.jsx';
import AboutTheFamily from './Pages/AboutTheFamily.jsx';
import Media from './Pages/Media.jsx';
import Login from './Pages/Login.jsx';
import Support from './Pages/Support.jsx';
import Admin from './Pages/Admin.jsx';
import SignUp from './Pages/SignUp.jsx';
import BookDetail from './Components/BookDetail';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/books',
        element: <Books />
      },

      {
        path: '/books/:bookId',
        element: <BookDetail />
      },
      {
        path: '/media',
        element: <Media />
      },
      {
        path: '/aboutTheAuthor',
        element: <AboutTheAuthor />
      },
      {
        path: '/aboutTheFamily',
        element: <AboutTheFamily />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/support',
        element: <Support />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)