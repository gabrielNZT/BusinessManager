import PagesRoutes from "./routes.js";
import { ConfigProvider } from "antd";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import locale from 'antd/es/locale/pt_BR';

function App() {
  return (
    <>
      <ConfigProvider locale={locale}>
        <PagesRoutes />
        <ToastContainer position="top-right" />
      </ConfigProvider>
    </>
  )
}

export default App;
