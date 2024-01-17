import Feed from "./components/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:channelId" element={<ChannelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
