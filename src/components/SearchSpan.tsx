import React from "react";
type SearchSpanProps = {
  title: string;
  // searchInput: (value: string) => void;
};

const SearchSpan = ({ title }: SearchSpanProps) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
};
export default SearchSpan;
