import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Sick } from "../types/SickType";

type SearchedresultProps = {
  searchedResult: Sick[];
};
const AutoCompleted = ({ searchedResult }: SearchedresultProps) => {
  // const autoRef = useRef<HTMLUListElement>(null);
  return (
    <Wrapper>
      <ListWrapper>
        {!searchedResult || searchedResult.length === 0 ? (
          <div>검색 결과가 없습니다</div>
        ) : (
          searchedResult?.map((item, idx) => (
            <Item key={item.sickCd}>
              <SearchMark>
                <AiOutlineSearch />
              </SearchMark>
              {
                item.sickNm
                // .replaceAll(searchTerm, `#$%${searchTerm}#$%`)
                // .split("#$%")
                // .map((e: string) => (
                //   <span
                //     key={uuid()}
                //     style={{ fontWeight: e === searchTerm ? "700" : "300" }}
                //   >
                //     {e}
                //   </span>
                // ))
              }
            </Item>
          ))
        )}
      </ListWrapper>
    </Wrapper>
  );
};
export default AutoCompleted;

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

const SearchMark = styled.span`
  margin-right: 5px;
  font-size: 16px;
`;
const Searched = styled.div`
  font-size: 19px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: #333;
  font-weight: 700;
`;
