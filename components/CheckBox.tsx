"use client";
import React from "react";
import styled from "styled-components";

type CheckProps = {
  label?: string;
  isChecked?: boolean;
  onClick?: () => void;
};

const StyledLabel = styled.div<CheckProps>`
  padding-left: 0.5rem;
  color: ${({ isChecked }) => (isChecked ? "var(--white)" : "var(--black)")};
  cursor: pointer;
`;

const StyledCheckBox = styled.li<CheckProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ isChecked }) =>
    isChecked ? "var(--green)" : "transparent"};
  padding: 0.5rem;
  cursor: pointer;
`;

const StyledCheck = styled.div<CheckProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ isChecked }) =>
    isChecked ? "var(--white)" : "transparent"};
  color: ${({ isChecked }) => (isChecked ? "var(--green)" : "var(--gray)")};
  border-radius: 0.25rem;
  border: 1px solid
    ${({ isChecked }) => (isChecked ? "var(--green)" : "var(--gray)")};
`;

export const CheckBox: React.FC<CheckProps> = ({
  label,
  isChecked,
  onClick,
}) => {
  return (
    <StyledCheckBox isChecked={isChecked} onClick={onClick}>
      <StyledLabel isChecked={isChecked} onClick={onClick}>
        {label}
      </StyledLabel>
      <StyledCheck isChecked={isChecked}>
        {isChecked && <span>&#10003;</span>}
      </StyledCheck>
    </StyledCheckBox>
  );
};

export default CheckBox;
