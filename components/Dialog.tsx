"use client";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Button from "./Button";

type DialogProps = {
  title?: string;
  setVisible: () => void;
  visible: boolean;
  children?: React.ReactNode;
};

const StyledDialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const StyledDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  width: 35vw;
  height: 35vh;
  background-color: var(--white);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;

const StyledTitle = styled.h4`
  display: flex;
  justify-content: center;
  color: var(--dark-gray);
  padding: 0rem 0 1rem 0;
`;
const StyledBody = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: scroll;
`;
const StyledFooter = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  justify-content: flex-end;
`;

const Dialog: React.FC<DialogProps> = ({
  title,
  visible,
  setVisible,
  children,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <StyledDialogContainer>
      <StyledDialog>
        <StyledTitle>{title}</StyledTitle>
        <StyledBody>{children}</StyledBody>
        <StyledFooter>
          <Button
            label="Cancel"
            variant="tertiary"
            onClick={() => setVisible()}
          ></Button>
          <Button
            label="Save"
            variant="secondary"
            onClick={() => setVisible()}
          ></Button>
        </StyledFooter>
      </StyledDialog>
    </StyledDialogContainer>
  );
};

export default Dialog;
