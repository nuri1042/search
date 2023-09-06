import React from "react";
import styled from "styled-components";
import SearchBar from "./search/SearchBar";

const Main = () => {
  return (
    <>
      <header />
      <div>
        <Title>
          <h2>
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </h2>
        </Title>
        <Search>
          <SearchBar />
        </Search>
      </div>
    </>
  );
};

const Title = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;

  h2 {
    font-size: 2.125rem;
    font-weight: bold;
    line-height: 3rem;
    text-align: center;
  }
`;

export const Search = styled.div`
  width: 490px;
  margin: 0 auto;

  position: relative;
`;
export default Main;
