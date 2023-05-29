"use client";
import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";

const StyledSeparator = styled.div`
  height: 1px;
  width: 100%;
  border: 1px solid var(--gray);
  margin: 0.5rem 0 0.25rem 0;
`;

const StyledCheckList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const item = {
  label: "Collection",
};

const CheckList: React.FC = () => {
  const [checkedArray, setCheckedArray] = React.useState<number[]>([]);

  const handleCheckboxClick = (index: number) => {
    if (checkedArray.includes(index)) {
      setCheckedArray(checkedArray.filter((item) => item !== index));
    } else {
      setCheckedArray([...checkedArray, index]);
    }
  };
  return (
    <StyledCheckList>
      <CheckBox
        label="New Collection"
        isChecked={checkedArray.includes(0)}
        onClick={() => handleCheckboxClick(0)}
      />
      <StyledSeparator />
      {Array.from({ length: 100 }, () => item).map((checkItem, index) => (
        <CheckBox
          key={index}
          label={`${checkItem.label} ${index + 1}`}
          isChecked={checkedArray.includes(index + 1)}
          onClick={() => handleCheckboxClick(index + 1)}
        />
      ))}
    </StyledCheckList>
  );
};

export default CheckList;
