"use client";

import styled from "styled-components";
import Avatar from "./Avatar";
import { StaticImageData } from "next/image";

type HeaderProps = {
  label: string;
  avatar?: StaticImageData;
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3rem;
  background-color: var(--header-black);
  padding: 0 1rem;
`;

const StyledTitle = styled.div`
  color: var(--white);
  text-align: center;
  margin: 0;
  flex-grow: 1;
`;

const Header: React.FC<HeaderProps> = ({ label, avatar }) => {
  return (
    <StyledHeader>
      <StyledTitle>{label}</StyledTitle>
      {avatar && <Avatar src={avatar} />}
    </StyledHeader>
  );
};

export default Header;
