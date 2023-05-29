"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

type CardProps = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray);
  border-radius: 0.5rem;
  width: 100%;
  max-width: 250px;
`;

const StyledTitle = styled.h3`
  font-size: 1rem;
  padding: 0.5rem 1rem 0;
`;

const StyledSubtitle = styled.h4`
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  color: var(--dark-gray);
`;

const StyledImage = styled(Image)`
  width: 100%;
  border-bottom: 1px solid var(--gray);
`;

const Card: React.FC<CardProps> = ({ title, subtitle, image }) => {
  return (
    <StyledCard>
      <StyledImage src={image} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledCard>
  );
};

export default Card;
