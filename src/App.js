import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App" data-theme='qctheme'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
