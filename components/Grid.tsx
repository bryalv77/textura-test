"use client";
import React from "react";
import styled from "styled-components";
import dress from "../public/dress.png";
import Card from "./Card";

const StyledGrid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const item = {
  title: "Garment Example",
  subtitle: "Collection Name",
  image: dress,
};

const Grid: React.FC = () => {
  return (
    <StyledGrid>
      {Array.from({ length: 20 }, () => item).map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        );
      })}
    </StyledGrid>
  );
};

export default Grid;
