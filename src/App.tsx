import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import Projets from './pages/projets/projets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projets',
    element: <Projets />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
