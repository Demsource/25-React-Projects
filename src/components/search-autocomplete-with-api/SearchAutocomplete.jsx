import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import "./SearchAutocomplete.css"

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchUsersList() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");

      const result = await response.json();

      if (result?.users?.length) {
        setUsers(result.users.map((user) => user.firstName));
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsersList();
  }, []);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData = users?.length
        ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
        : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  if (loading) return <h2>Loading...</h2>;
  if (errorMsg) return <h2>{errorMsg}</h2>;

  return (
    <div className="search-autocomplete">
      <input
        value={searchParam}
        onChange={handleChange}
        type="text"
        name="search-users"
        placeholder="Search Users"
      />
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
