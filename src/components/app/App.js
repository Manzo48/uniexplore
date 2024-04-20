import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from '../../redux/store';
import Header from '../Header';
import UniversitiesRender from '../UniversitiesRender';
import University from '../University/university';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: '/university/:id',
      element: <University />,
    },
    {
      path: '/',
      element: <UniversitiesRender />,
    },
  ]);
  
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
