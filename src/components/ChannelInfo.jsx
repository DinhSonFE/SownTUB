import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function ChannelInfo({ channelId, children }) {
  const [channelInfo, setChannelInfo] = useState(null);

  useEffect(() => {
    if (channelId) {
      fetchFromAPI(`channels?part=snippet,statistics&id==${channelId}`)
        .then((data) => setChannelInfo(data))
        .catch((error) => console.error("Error fetching channel info:", error));
    }
  }, [channelId]);

  // Trả về children với dữ liệu kênh đã lấy được
  return children(channelInfo);
}

export default ChannelInfo;
