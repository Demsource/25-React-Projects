import React, { useEffect, useState } from "react";
import GithubUser from "./GithubUser";
import "./GithubProfileFinder.css";

const GithubProfileFinder = () => {
  const [userName, setUsername] = useState("demsource");
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchGithubUserData() {
    try {
      setLoading(true);

      const response = await fetch(`https://api.github.com/users/${userName}`);

      const result = await response.json();

      if (result) {
        setUserData(result);
        setLoading(false);
        setUsername("");
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleSubmit() {
    fetchGithubUserData();
  }

  if (loading) return <h2>Loading...</h2>;
  if (errorMsg) return <h2>Error occured {errorMsg}</h2>;

  return (
    <div className="github-profile-finder">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search by Github username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData && <GithubUser user={userData} />}
    </div>
  );
};

export default GithubProfileFinder;
