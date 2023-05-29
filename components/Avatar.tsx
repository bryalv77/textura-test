"use client";

import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

type AvatarProps = {
  src: StaticImageData;
};

const StyledAvatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return <StyledAvatar src={src} alt="avatar" />;
};

export default Avatar;
