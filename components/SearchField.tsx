"use client";
import React from "react";
import styled from "styled-components";

type SearchFieldProps = {};

const StyledSearchFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledSearchField = styled.input<SearchFieldProps>`
  border: none;
  border-bottom: 1px solid var(--gray);
  padding: 0.5rem 0;
  background-color: transparent;
`;
const SearchIcon = styled.div`
  margin-left: 0.25rem;
  margin-top: 0.25rem;
`;

const SearchField: React.FC<SearchFieldProps> = ({}) => {
  return (
    <StyledSearchFieldContainer>
      <StyledSearchField placeholder="Search" />
      <SearchIcon>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="var(--green)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.8898 15.5366L15.5366 15.8898C15.3897 16.0367 15.1521 16.0367 15.0052 15.8898L10.9727 11.8573C10.9008 11.7854 10.8633 11.6916 10.8633 11.5916V11.3259C9.70978 12.37 8.18119 13.0045 6.50255 13.0045C2.9327 13.0045 0.047436 10.1568 0.000546605 6.58695C-0.0463428 2.92957 2.92957 -0.0463428 6.58695 0.000546605C10.1568 0.047436 13.0045 2.9327 13.0045 6.50255C13.0045 8.18119 12.37 9.70978 11.3259 10.8633H11.5916C11.6916 10.8633 11.7854 10.9039 11.8573 10.9727L15.8898 15.0052C16.0367 15.1521 16.0367 15.3897 15.8898 15.5366ZM12.0042 6.50255C12.0042 3.46099 9.54411 1.00085 6.50255 1.00085C3.46099 1.00085 1.00085 3.46099 1.00085 6.50255C1.00085 9.54411 3.46099 12.0042 6.50255 12.0042C9.54411 12.0042 12.0042 9.54411 12.0042 6.50255Z"></path>
        </svg>
      </SearchIcon>
    </StyledSearchFieldContainer>
  );
};

export default SearchField;
