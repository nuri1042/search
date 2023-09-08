import { Sick } from "../types/SickType";
import { ChangeEvent, createContext, useContext } from "react";

export interface SearchContextType {
  keyboardEvent: (e: any) => void;
  isFocus: boolean;
  changeFocus: (value: boolean) => void;
  searchText: string;
  suggestions: Sick[];
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSuggestionClick: (suggestion: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => useContext(SearchContext) as SearchContextType;
export default SearchContext;
