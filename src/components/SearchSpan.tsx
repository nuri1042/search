import React from "react";
import styled from "styled-components";
import { Sick } from "../types/SickType";

type SearchedresultProps = {
  searchedResult: Sick[];
};

const SearchSpan = ({ searchedResult }: SearchedresultProps) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>추천 검색어</Title>
        <ListWrapper>
          {!searchedResult || searchedResult.length === 0 ? (
            <div>검색 결과가 없습니다</div>
          ) : (
            searchedResult?.map((item, idx) => (
              <Item key={item.sickCd}>
                {/* <SearchMark>
                  <AiOutlineSearch />
                </SearchMark> */}
                {item.sickNm
                   .replaceAll(searchedResult, `#$%${searchTerm}#$%`)
                  .split('#$%')
                  .map((e: string) => (
                    <span
                      key={uuid()}
                      style={{ fontWeight: e === searchTerm ? '700' : '300' }}
                    >
                      {e}
                    </span>
                }
              </Item>
            ))
          )}
        </ListWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
export default SearchSpan;

const Wrapper = styled.div`
  background-color: #fff;
  margin-top: 10px;
  height: 450px;
  border-radius: 20px;
  font-size: 18px;
`;
const ContentWrapper = styled.div`
  padding: 25px;
`;
const Title = styled.p`
  border-bottom: 1px solid #333;
  padding-bottom: 3px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #808080;
`;
const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.li`
  padding: 7px;
  width: 425px;
  margin-bottom: 4px;
  position: relative;
`;
