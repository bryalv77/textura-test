"use client";

import styled from "styled-components";
import Button from "./Button";
import Dropdown from "./Dropdown";
import SearchField from "./SearchField";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem 2rem 1rem;
`;

const StyledLeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
`;

const StyledCenterContainer = styled.div`
  display: flex;
`;
const StyledRightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: flex-end;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLeftContainer>
        <Button label="Collections" variant="secondary" />
        <Button label="Garments" />
        <Button label="+ New garment" variant="text" />
      </StyledLeftContainer>
      <StyledCenterContainer>
        <SearchField />
      </StyledCenterContainer>
      <StyledRightContainer>
        <Dropdown
          label="Sort by: "
          variant="text"
          options={[
            { label: "Name", value: "name" },
            { label: "Newest", value: "newest" },
          ]}
        />
      </StyledRightContainer>
    </StyledNavbar>
  );
}
