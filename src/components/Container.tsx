import React, { ReactNode } from "react";
import styled from "styled-components";

const CenterAllignedContainer = styled.div`
  max-width: 720px;
  height: auto;
`;
export const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <CenterAllignedContainer>{children}</CenterAllignedContainer>;
};
