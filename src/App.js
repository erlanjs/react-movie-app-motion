import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Discover from "./pages/discover/Discover";
import CreditDetails from "./pages/creditDetails/CreditDetails";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies-details/:id" element={<MovieDetails />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/credit/:id" element={<CreditDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
