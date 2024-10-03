import { Route, Routes } from "react-router-dom";
import { Home, Login, WebWindow } from "./pages";
import Header from "./pages/structure/Header";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/web" element={<WebWindow />} />
      </Routes>
    </>
  );
};

export default App;
