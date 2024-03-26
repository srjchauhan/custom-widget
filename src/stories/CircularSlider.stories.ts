import type { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';
import centerImage from "../assests/center.png";
import CircularSlider from "../components/CircularSlider/CircularSlider";

const meta = {
  title: "Widgets/CircularSlider",
  component: CircularSlider,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CircularSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    width:300,
    height:300,
    backgroundColor: "#284e5d",
    sliderMaxValue: 10,
    sliderMinValue:0,
    sliderStepvalue:1,
    sliderDefaultValue:0,
    centerImageUrl:centerImage,
    onChange: fn(),
    dashColor: "#819ca7",
    dashWidth: "2px",
    progressBarColor: "white",
    progressBarBackgroundColor: "#718993",
    centerTextFontSize: 20,
    centerTextFontColor: "white",
    progressBarWidth: 5,
    sliderBackgroundColor: "white",
    sliderFilledColor:"#37c0d5"
    },
  };