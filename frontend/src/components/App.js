import '../styles/App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

/*Importação dos componentes*/
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExists } from '../helper/helper';


/*Rotas do react*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <CheckUserExists><Quiz /></CheckUserExists>
  },
  {
    path: '/result',
    element: <CheckUserExists><Result /></CheckUserExists>
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;