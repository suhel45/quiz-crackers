import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './component/Topics';
import Main from './layout/Main';
import Blog from './component/Blog';
import Statistics from './component/Statistics';
import TopicDetails from './component/TopicDetails';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,children:[
        {
          path:'/blog',element:<Blog></Blog>
        },
        {
          path:'/topic',
          loader:() => fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Topics></Topics>
          
        },
        {
          path:'/topic/:id',
          loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<TopicDetails></TopicDetails>
        },
        {
          path:'/statistics',
          loader:() => fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Statistics></Statistics>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
