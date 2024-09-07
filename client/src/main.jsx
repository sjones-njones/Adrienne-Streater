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
import SignUp from './Pages/SignUp.jsx';
import Book1 from './Components/Book1';
import Book2 from './Components/Book2';

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
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/books/book1',
        element: <Book1 />
      },
      {
        path: '/books/book2',
        element: <Book2 />
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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)