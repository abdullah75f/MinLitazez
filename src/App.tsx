import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./ThemeProvider";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Stationery from "./pages/Sationery";
import Candle from "./pages/Candle";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="stationery" element={<Stationery />} />
        <Route path="Candle" element={<Candle />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
      <ToastContainer autoClose={500} />
    </ThemeProvider>
  );
}

export default App;
