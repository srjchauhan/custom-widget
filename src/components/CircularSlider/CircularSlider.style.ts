import styled from "styled-components";

export const CircularSliderContainer = styled.section<{
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
}>`
  width: ${(props) => props.$width || "300px"};
  height: ${(props) => props.$height || "300px"};
  background-color: ${(props) => props.$backgroundColor || "#284e5d"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  gap: 10px;
`;

export const DashSection = styled.section<{
  $dashWidth?: string;
  $dashColor?: string;
}>`
  border-radius: 50%;
  border: ${(props) => props.$dashWidth || "2px"} dashed
    ${(props) => props.$dashColor || "#819ca7"};
  padding: 20px;
`;

export const Slider = styled.input<{
  $backgroundColor?: string;
  $filledColor?: string;
  $progress: number;
}>`
  width:90%;
  &[type='range'] {
    -webkit-appearance: none;
    height: 15px;
    background: ${(props) => props.$backgroundColor || "white"};
    background-image: linear-gradient(
      ${(props) => props.$filledColor || "#00d5b6"},
      ${(props) => props.$filledColor || "#00d5b6"}
    );
    border-radius: 10px;
    background-size: ${(props) => props.$progress}% 100%;
    background-repeat: no-repeat;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.$backgroundColor || "white"};
      background: ${(props) => props.$filledColor || "#00d5b6"};
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition
  }
  &::-ms-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.$backgroundColor || "white"};
      background: ${(props) => props.$filledColor || "#00d5b6"};
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition
  }
  &::-moz-range-thumb{
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.$backgroundColor || "white"};
      background: ${(props) => props.$filledColor || "#00d5b6"};
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition
  }
`;
