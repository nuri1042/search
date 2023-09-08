import React from "react";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import SearchList from "../components/SearchList";
import SearchProvider from "../context/SearchProvider";
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
        <SearchProvider>
          <SearchForm />
          <SearchList />
        </SearchProvider>
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
    color: black;
  }
`;

export default Main;
