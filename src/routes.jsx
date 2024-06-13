import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Employee from './pages/Employee';
import Company from './pages/Company';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import NotFound from './pages/NotFound';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'employee',
            element: <Employee />,
          },
          {
            path: 'company',
            element: <Company />,
          },
        ],
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:id',
        element: <PostDetail />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);
