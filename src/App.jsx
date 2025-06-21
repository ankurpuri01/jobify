import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Login, Register, HomeLayout, Landing, Error, DashboardLayout } from './pages';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Landing /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login setIsAuthenticated={setIsAuthenticated} /> },
        {
          path: 'dashboard',
          element: isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />,
          children: [
            { path: 'add-job', element: <DashboardLayout /> },
            { path: 'jobs', element: <DashboardLayout /> },
            { path: '*', element: <></> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;