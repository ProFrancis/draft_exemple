import { Routes, Route } from "react-router";
import "./App.css";

// PAGES
import Login from "./pages/pageAuth/login";
import Register from "./pages/pageAuth/Register";
import Layout from "./components/Layout/Layout";
import Home from "./pages/pageHome/Home";

// SERVICES
import PrivateRouter from "./utils/helpers/PrivateRouter";
import PublicRouter from "./utils/helpers/PublicRouter";
import Template from "./components/Admin/Template/Template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* ROUTE PUBLIC */}
        <Route element={<PublicRouter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>{" "}
        {/* FIN ROUTE PUBLIC */}
      </Route>

      <Route element={<PrivateRouter />}>
        <Route path="/dashboard" element={<Template />}>
        
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
