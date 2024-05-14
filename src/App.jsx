import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout/>}>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  );
}

export default App;
