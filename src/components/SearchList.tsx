import { useSearch } from "../context/SearchContext";
import SelectItem from "./SearchItem";
import { styled } from "styled-components";
import { isEmpty } from "../lib/utils";
import React from "react";

const SEARCH_LIMIT = 10;

export default function SelectList() {
  const { suggestions, searchText } = useSearch();

  return (
    <StyledList>
      <li>{!isEmpty(searchText) && !isEmpty(suggestions) && "추천 검색어"}</li>
      {!isEmpty(searchText) &&
        suggestions.slice(0, SEARCH_LIMIT).map((sick) => {
          return (
            <li key={sick.sickCd}>
              <SelectItem>{sick.sickNm}</SelectItem>
            </li>
          );
        })}
    </StyledList>
  );
}
const StyledList = styled.ul`
  background: var(--color-white20);
  border-radius: 50px;
  padding: 30px;
  border: 1px solid white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  li:nth-child(2) {
    margin-top: 10px;
  }
`;
