import * as React from "react";
import * as Styled from "./CapacityIndicator.style";

export interface IIndicatorList{
    id: number;
    width: string;
    value: number;
    title: string;
    height?: string;
  }

interface ICapacityIndicatorProps {
  height?: string;
  width?: string;
  backgroundColor?: string;
  onBarChange?: (value: number) => void;
  barDefaultColor?: string;
  barActiveColor?: string;
  defaultValue?: number;
  indicatorList:IIndicatorList[]
}

/**
 * Renders a capacity indicator component.
 *
 * @param {ICapacityIndicatorProps} props - The props object containing the following properties:
 *   - height: The height of the component (default: "350px").
 *   - width: The width of the component (default: "300px").
 *   - backgroundColor: The background color of the component.
 *   - onBarChange: A callback function triggered when a bar is clicked with the value of the clicked bar (default: empty function).
 *   - barDefaultColor: The default color of the bars (default: "#819ca7").
 *   - barActiveColor: The color of the active bar (default: "white").
 *   - defaultValue: The default value of the bar (default: 1).
 *   - indicatorList: An array of indicator objects, each containing the following properties:
 *     - id: The ID of the indicator.
 *     - width: The width of the indicator.
 *     - height: The height of the indicator.
 *     - value: The value of the indicator.
 * @return {JSX.Element} The rendered capacity indicator component.
 */

export default function CapacityIndicator({
  height="350px",
  width="300px",
  backgroundColor,
  onBarChange = () => {},
  barDefaultColor = "#819ca7",
  barActiveColor = "white",
  defaultValue = 1,
  indicatorList
}: ICapacityIndicatorProps) {
  const [barValue, setBarValue] = React.useState(defaultValue);
  const onBarClick = (value: number) => {
    setBarValue(value);
    onBarChange(value);
  };

  const barTitle = React.useMemo(() => {
    return indicatorList.find((bar) => bar.value === barValue)?.title;
  }, [barValue]);
  return (
    <Styled.CapacityIndicatorContainer
      $height={height}
      $width={width}
      $backgroundColor={backgroundColor}
      id="capacity-indicator"
    >
      <Styled.Title>{barTitle}</Styled.Title>
      {indicatorList.map(({ id, width, height, value, }) => (
        <Styled.BarSection
          key={id}
          id={`bar-${id.toString()}`}
          $height={height}
          $width={width}
          $backgroundColor={
            barValue >= value ? barActiveColor : barDefaultColor
          }
          onClick={()=>onBarClick(value)}
        ></Styled.BarSection>
      ))}
    </Styled.CapacityIndicatorContainer>
  );
}
