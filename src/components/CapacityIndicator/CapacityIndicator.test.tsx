import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CapacityIndicator from "./CapacityIndicator";
import { barData } from "./constant";

describe("CapacityIndicator", () => {
  test("renders the component with default props", () => {
    const { getByText, container } = render(
      <CapacityIndicator indicatorList={barData} />
    );
    const title = getByText("Very Low");
    const capacityIndicator = container.querySelector("#capacity-indicator");
    expect(title).toBeInTheDocument();
    expect(capacityIndicator).toBeInTheDocument();
  });

  test("calls onBarChange callback  with the correct value", () => {
    const handleBarChange = jest.fn();
    const { getByText, container } = render(
      <CapacityIndicator
        indicatorList={barData}
        onBarChange={handleBarChange}
      />
    );
    let barSection = container.querySelector("#bar-1");
    barSection && fireEvent.click(barSection);
    expect(handleBarChange).toHaveBeenCalledWith(5);
    expect(getByText("Very High")).toBeInTheDocument();
    barSection = container.querySelector("#bar-2");
    barSection && fireEvent.click(barSection);
    expect(handleBarChange).toHaveBeenCalledWith(4);
    expect(getByText("High")).toBeInTheDocument();
    barSection = container.querySelector("#bar-3");
    barSection && fireEvent.click(barSection);
    expect(handleBarChange).toHaveBeenCalledWith(3);
    expect(getByText("Medium")).toBeInTheDocument();
    barSection = container.querySelector("#bar-4");
    barSection && fireEvent.click(barSection);
    expect(handleBarChange).toHaveBeenCalledWith(2);
    expect(getByText("Low")).toBeInTheDocument();
    barSection = container.querySelector("#bar-5");
    barSection && fireEvent.click(barSection);
    expect(handleBarChange).toHaveBeenCalledWith(1);
    expect(getByText("Very Low")).toBeInTheDocument();
  });

  test("renders the component with custom props", () => {
    const { getByText, container } = render(
      <CapacityIndicator
        indicatorList={barData}
        height="500px"
        width="400px"
        backgroundColor="red"
        onBarChange={jest.fn()}
        defaultValue={3}
      />
    );
    const title = getByText("Medium");
    const capacityIndicator = container.querySelector("#capacity-indicator");
    expect(title).toBeInTheDocument();
    expect(capacityIndicator).toHaveStyle({
      backgroundColor: "red",
      height: "500px",
      width: "400px",
    });
  });
});
