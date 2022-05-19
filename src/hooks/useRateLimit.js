import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useRateLimit(id, limit) {
  const [rateLimit, setRateLimit] = useState(0);

  async function refreshRateLimit() {
    let response = await axios.get(process.env.REACT_APP_API_HOST + '/api/nft/ratelimit/' + id);
    setRateLimit(response.data.rate);
  }

  useEffect(() => {
    refreshRateLimit();
  }, [])

  return [rateLimit >= limit, refreshRateLimit];
}