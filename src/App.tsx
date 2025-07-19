import { ToastContainer } from 'react-toastify';
import { MainRouter } from './routers/MainRouter'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <MainRouter/>
    </>
  )
}

export default App
