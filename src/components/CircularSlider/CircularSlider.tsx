import * as React from "react";
import * as Styled from "./CircularSlider.style";
import CircularProgress from "./CircularProgress";
import centerImage from "../../assests/center.png";

interface ICircularSliderProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  sliderMaxValue?: number;
  sliderMinValue?: number;
  sliderStepvalue?: number;
  sliderDefaultValue?: number;
  centerImageUrl?: string;
  onChange?: (value: number) => void;
  dashColor?: string;
  dashWidth?: string;
  progressBarWidth?: number;
  progressBarColor?: string;
  progressBarBackgroundColor?: string;
  centerTextFontSize?: number;
  centerTextFontColor?: string;
  sliderBackgroundColor?: string;
  sliderFilledColor?: string;
}
 /**
 * Renders a circular slider component with customizable options.
 *
 * @param {ICircularSliderProps} width - the width of the circular slider
 * @param {ICircularSliderProps} height - the height of the circular slider
 * @param {ICircularSliderProps} backgroundColor - the background color of the circular slider
 * @param {ICircularSliderProps} sliderMaxValue - the maximum value of the slider
 * @param {ICircularSliderProps} sliderMinValue - the minimum value of the slider
 * @param {ICircularSliderProps} sliderStepvalue - the step value of the slider
 * @param {ICircularSliderProps} sliderDefaultValue - the default value of the slider
 * @param {ICircularSliderProps} centerImageUrl - the URL of the center image
 * @param {ICircularSliderProps} onChange - the function to call when the value changes with the slider value parameter
 * @param {ICircularSliderProps} dashColor - the color of the dashes
 * @param {ICircularSliderProps} dashWidth - the width of the dashes
 * @param {ICircularSliderProps} progressBarColor - the color of the progress bar
 * @param {ICircularSliderProps} progressBarBackgroundColor - the background color of the progress bar
 * @param {ICircularSliderProps} centerTextFontSize - the font size of the center text
 * @param {ICircularSliderProps} centerTextFontColor - the font color of the center text
 * @param {ICircularSliderProps} progressBarWidth - the width of the progress bar
 * @param {ICircularSliderProps} sliderBackgroundColor - the background color of the slider
 * @param {ICircularSliderProps} sliderFilledColor - the filled color of the slider
 * @return {JSX.Element} The circular slider component
 */ 
export default function CircularSlider({
  width = 300,
  height = 350,
  backgroundColor,
  sliderMaxValue = 10,
  sliderMinValue = 0,
  sliderStepvalue = 1,
  sliderDefaultValue = 0,
  centerImageUrl = centerImage,
  onChange = () => {},
  dashColor,
  dashWidth,
  progressBarColor,
  progressBarBackgroundColor,
  centerTextFontSize,
  centerTextFontColor,
  progressBarWidth,
  sliderBackgroundColor,
  sliderFilledColor,
}: ICircularSliderProps) {
  const [value, setValue] = React.useState<number>(
    sliderDefaultValue >= sliderMinValue && sliderDefaultValue <= sliderMaxValue
      ? sliderDefaultValue
      : sliderMinValue
  );

  width = Math.max(width, 200); // set minimum width
  height = Math.max(height, 200); // set minimum height

  const circularProgressSize = Math.min(width, height) - 100;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
    onChange(+event.target.value);
  };
  const circleAngle = React.useMemo(() => {
    return ((value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 360;
  }, [value, sliderMaxValue, sliderMinValue]);

  const progressPercentage = React.useMemo(() => {
    return ((value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
  }, [value, sliderMaxValue, sliderMinValue]);
  return (
    <Styled.CircularSliderContainer
      $width={`${width}px`}
      $height={`${height}px`}
      $backgroundColor={backgroundColor}
      id="circular-slider-container"
    >
      <Styled.DashSection $dashColor={dashColor} $dashWidth={dashWidth}>
        <CircularProgress
          imageUrl={centerImageUrl}
          angle={circleAngle}
          value={value}
          width={circularProgressSize}
          height={circularProgressSize}
          progressWidth={progressBarWidth}
          progressBarColor={progressBarColor}
          progressBarBackgroundColor={progressBarBackgroundColor}
          fontSize={centerTextFontSize}
          fontColor={centerTextFontColor}
        />
      </Styled.DashSection>
      <Styled.Slider
        id="circular-slider"
        type="range"
        min={sliderMinValue}
        max={sliderMaxValue}
        step={sliderStepvalue}
        $progress={progressPercentage}
        value={value}
        onChange={handleChange}
        $backgroundColor={sliderBackgroundColor}
        $filledColor={sliderFilledColor}
      />
    </Styled.CircularSliderContainer>
  );
}
