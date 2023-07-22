import Navbar from "./components/Navbar";
import News from "./components/News";
import Search from "./components/Search";
import DetailedNews from "./components/DetailedNews";
import NewsContext from "./context/NewsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChannelList from "./components/ChannelList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
          <Route path="/channel-list" element={<ChannelList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
