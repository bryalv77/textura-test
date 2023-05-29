"use client";
import React from "react";
import styled from "styled-components";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text" | "tertiary";
};

type StyledButtonProps = {
  variant?: "primary" | "secondary" | "text" | "tertiary";
};
const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "var(--green)";
      case "secondary":
      case "tertiary":
      case "text":
        return "transparent";
      default:
        return "var(--green)";
    }
  }};
  color: ${({ variant }) =>
    variant === "secondary" || variant === "text"
      ? "var(--green)"
      : variant === "tertiary"
      ? "var(--dark-gray)"
      : "var(--white)"};
  border: 1px solid var(--green);
  border-color: ${({ variant }) =>
    variant === "secondary"
      ? "var(--green)"
      : variant === "tertiary"
      ? "var(--dark-gray)"
      : "transparent"};
  padding: ${({ variant }) =>
    variant === "text" ? "0.5rem 1rem" : "0.5rem 2rem"};
  margin: ${({ variant }) => (variant === "text" ? "0" : "0 0.25rem")};
  border-radius: 0.25rem;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button;
