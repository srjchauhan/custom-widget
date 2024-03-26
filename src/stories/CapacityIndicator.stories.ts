import type { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';
import CapacityIndicator from "../components/CapacityIndicator/CapacityIndicator";
import { barData } from "../components/CapacityIndicator/constant";


const meta = {
  title: "Widgets/CapacityIndicator",
  component: CapacityIndicator,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CapacityIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        height: "300px",
        width: "300px",
        backgroundColor: "#284e5d",
        onBarChange: fn(),
        barDefaultColor: "#819ca7",
        barActiveColor: "white",
        defaultValue: 1,
        indicatorList: barData
    },
  };