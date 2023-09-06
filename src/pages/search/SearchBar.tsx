import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import getData from "../../api";
import AutoCompleted from "../../components/AutoComplete";
import useDebounce from "../../hooks/useDebounce";
import { Sick } from "../../types/SickType";
import SearchSpan from "../../components/SearchSpan";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedResult, setSearchedResult] = useState<Sick[]>([]);
  const { debounceValue } = useDebounce(searchInput);
  const [suggested, setSuggested] = useState();

  const [onFocus, setOnFocus] = useState(false);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput === " " || debounceValue === " ") return;

    getData(debounceValue).then((res) => setSearchedResult(res));
    console.log(searchedResult);
  }, [debounceValue]);

  return (
    <>
      <SearchSection>
        <span className="search_icon"></span>
        <Input
          type="search"
          placeholder="질환명을 입력해주세요."
          value={searchInput}
          onChange={changeInputValue}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
        />
        <SearchBorder>
          <span>검색</span>
        </SearchBorder>
        {onFocus &&
          searchedResult.map((result) => {
            return <div>{result.sickNm}</div>;
          })}
        {/* {searchedResult.length === 0 ? (
          <div>no results</div>
        ) : (
          searchedResult.map((search) => {
            return <div>{search.sickNm}</div>;
          })
        )} */}
      </SearchSection>
    </>
  );
};

const SearchSection = styled.div`
  position: relative;

  & span.search_icon {
    position: absolute;
    width: 16px;
    top: 27px;
    left: 25px;
    z-index: 1;
  }
`;

const Input = styled.input`
  width: 100%;

  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: relative;

  padding: 20px 80px 20px 48px;
`;

export const SearchBorder = styled.div`
  position: absolute;
  width: 15%;
  height: 100%;
  top: 0;
  right: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  background-color: #4a78dc;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  span {
    padding-right: 10px;
    font-weight: bold;
    font-size: 1.2em;
    color: #fff;
  }
`;
export default SearchBar;
