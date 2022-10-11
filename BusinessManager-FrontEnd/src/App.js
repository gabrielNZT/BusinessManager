import PagesRoutes from "./routes.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <PagesRoutes/>
    <ToastContainer position="top-right" />
    </>
  )
}

export default App;
