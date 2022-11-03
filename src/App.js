import Navbar from "./components/Navbar";
import News from "./components/News";
import Search from "./components/Search";
import DetailedNews from "./components/DetailedNews";
import NewsContext from "./context/NewsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NewsContext>
                <Search />
                <News />
              </NewsContext>
            }
          />
          <Route path="/detailed-news" element={<DetailedNews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
