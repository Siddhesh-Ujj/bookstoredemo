import React, { useState, useRef } from "react"; // useRef is needed
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../assets/Search.svg";
import CancelIcon from "../assets/Cancel.svg";
const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const SearchInput = styled.input`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 5px 5px 40px;
  font-size: 16px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: #5e56e7;
    box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
    height: 40px;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #888;
  padding: 0;
  margin: 0;

  &:hover {
    color: #333;
  }
`;

const SearchBar = ({ onSearch, setPage, initialSearch }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSubmit(e.target.value);
  };

  const handleSubmit = (value) => {
    setTimeout(() => {
      onSearch(value);
      const category = location.pathname.split("/").pop();
      navigate(`/books/${category}?search=${value}`);
    }, 1000);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
    setPage(1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <SearchContainer style={{ position: "relative" }}>
      <img src={SearchIcon} style={{ position: "absolute", left: "10px" }} />
      <SearchInput
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleChange}
        ref={inputRef}
      />
      {searchTerm && (
        <ClearButton type="button" onClick={handleClear}>
          <img src={CancelIcon} />
        </ClearButton>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
