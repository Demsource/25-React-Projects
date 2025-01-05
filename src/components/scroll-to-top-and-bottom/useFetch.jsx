import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMSg] = useState();

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setErrorMSg(`Error occured: ${error.message}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, errorMsg, loading };
};

export default useFetch;
