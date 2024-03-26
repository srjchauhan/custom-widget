import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CircularSlider from "./CircularSlider";
describe("CircularSlider", () => {
  test("Renders with default props", () => {
    const { getByRole } = render(<CircularSlider />);

    expect(getByRole("slider")).toBeInTheDocument();
  });
  test('Renders with custom props', () => {
    const { getByRole, container } = render(
      <CircularSlider
        width={500}
        height={400}
        sliderMaxValue={20}
        sliderDefaultValue={15}
        sliderMinValue={0}
        backgroundColor="lightblue"
      />
    );
    const CircularSliderContainer = container.querySelector('#circular-slider-container');
    expect(CircularSliderContainer).toHaveStyle({ width: '500px', height: '400px', backgroundColor: 'lightblue' });
  });

test('onChange callback is invoked with correct value', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<CircularSlider onChange={onChangeMock} />);
    const slider = getByRole('slider');
  
    fireEvent.change(slider, { target: { value: '5' } });
    expect(onChangeMock).toHaveBeenCalledWith(5);
  });

  test('State changes update components correctly', () => {
    const { getByRole, rerender } = render(<CircularSlider sliderMaxValue={10} />);
    const slider = getByRole('slider');
  
    expect(slider).toHaveAttribute('max', '10');
  
    rerender(<CircularSlider sliderMaxValue={20} />);
  
    expect(slider).toHaveAttribute('max', '20');
  });
});
