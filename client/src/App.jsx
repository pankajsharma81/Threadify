// import Loading from "./components/common/Loading";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/contact" element={<h1>Contact</h1>} />
          <Route exact path="/user" element={<h1>User profile</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
