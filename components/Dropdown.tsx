"use client";
import React from "react";
import styled from "styled-components";

type DropdownProps = {
  label: string;
  onChange?: () => void;
  variant?: "primary" | "secondary" | "text";
  options: { label: string; value: string }[];
};

type StyledSelectProps = {
  variant?: "primary" | "secondary" | "text";
};
const StyledSelect = styled.select<StyledSelectProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "var(--green)";
      case "secondary":
        return "transparent";
      case "text":
        return "transparent";
      default:
        return "var(--green)";
    }
  }};
  color: ${({ variant }) =>
    variant === "secondary"
      ? "var(--green)"
      : variant === "text"
      ? "var(--black)"
      : "var(--white)"};
  border: 1px solid var(--green);
  border-color: ${({ variant }) =>
    variant === "secondary"
      ? "var(--green)"
      : variant === "text"
      ? "var(--gray)"
      : "transparent"};
  padding: 0.5rem;
  margin: 0 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.8725rem;
`;

const StyledOption = styled.option``;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--black);
`;

const Dropdown: React.FC<DropdownProps> = ({
  label,
  onChange,
  variant,
  options,
}) => {
  return (
    <StyledContainer>
      {label}&nbsp;
      <StyledSelect onClick={onChange} variant={variant}>
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
};

export default Dropdown;
