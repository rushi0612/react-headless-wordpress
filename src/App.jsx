import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/post/:id"
          element={<SinglePost />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;