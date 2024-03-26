import styled from "styled-components";

// Using transient props in styled components

export const CapacityIndicatorContainer = styled.section<{
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
}>`
  width: ${(props) => props.$width || "300px"};
  height: ${(props) => props.$height || "300px"};
  background-color: ${(props) => props.$backgroundColor || "#284e5d"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  box-sizing: border-box;
`;

export const BarSection = styled.section<{
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
}>`
  position: relative;
  width: ${(props) => props.$width || "75%"};
  height: ${(props) => props.$height || "40px"};
  background-color: transparent;
  border-top: ${(props) => props.$height || "40px"} solid
    ${(props) => props.$backgroundColor || "#8caebb"};
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  cursor: pointer;
  box-sizing: border-box;\
  border-radius: 20px;

`;

export const Title = styled.span`
  color: white;
`;
