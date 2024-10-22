import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import BookDetails from '../components/BookDetails/BookDetails';
import Lists from '../pages/Lists/Lists';
import Readlist from '../components/Readlist/Readlist';
import Wishlist from '../components/Wishlist/Wishlist';
import PagesRead from '../pages/PagesRead/PagesRead';
import Testimonials from '../pages/Testimonials/Testimonials';
import HelpCenter from '../pages/HelpCenter/HelpCenter';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books/:id',
        element: <BookDetails />,
        loader: () => fetch('/books.json')
      },
      {
        path: '/lists',
        element: <Lists />,
        children: [
          {
            index: true,
            element: <Readlist />,
          },
          {
            path: 'wishlist',
            element: <Wishlist />,
          },
        ],
      },
      {
        path: '/pages-read',
        element: <PagesRead />,
      },
      {
        path: '/testimonials',
        element: <Testimonials />,
      },
      {
        path: '/help',
        element: <HelpCenter />,
      },
    ]
  },
]
);

export default router;