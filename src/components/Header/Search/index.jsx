import { Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/searchReducer";
import './index.css'

const Search = () => {

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      dispatch(setSearchValue(e.target.value));
    }
  };

  return (
    <div className="search_wrapper">
      <Input
        placeholder="Введите наименование университета"
        allowClear
        value={inputValue}
        onChange={handleChangeInputValue}
        onKeyDown={(e) => handleKeyPress(e)}
        className="search"
      />
    </div>
  );
};

export default Search;
