import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
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
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'courses',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path:'/quiz/:id',
          loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
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
