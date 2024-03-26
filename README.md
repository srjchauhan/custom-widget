# Custom Widget

Customizable Circular Slider and capacity indicator widget developed using React

StoryBook [Link](https://6602563496eb1292abb4b41b-aknvjkzpuy.chromatic.com/)
# CapacityIndicator
The `CapacityIndicator` component is used to display the capacity status in the application.

## Props
| Prop            | Type     | Default Value | Description                                                                                                     |
|-----------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------|
| height          | string   | "350px"       | Sets the overall height of the indicator.                                                                       |
| width           | string   | "300px"       | Sets the overall width of the indicator.                                                                        |
| backgroundColor | string   | undefined     | Sets the background color of the indicator.                                                                     |
| onBarChange     | function | () => {}      | A callback function triggered when the active bar changes. It receives the selected bar's value as an argument. |
| barDefaultColor | string   | "#819ca7"     | Sets the default color of the bars.                                                                             |
| barActiveColor  | string   | "white"       | Sets the color of the active bar (the bar representing the selected value).                                     |
| defaultValue    | number   |             1 | Sets the initial value (corresponding to a bar) displayed as active.                                            |

# CircularSlider
This React component renders a customizable circular slider for selecting a value within a specified range. It combines a circular progress indicator with a slider track for intuitive user interaction.

## Props
| Prop                       | Type     | Default Value | Description                                                                 |   |   |   |
|----------------------------|----------|---------------|-----------------------------------------------------------------------------|---|---|---|
| width                      | number   |           300 | Sets the overall width of the slider in pixels. (min: 200)                  |   |   |   |
| height                     | number   |           350 | Sets the overall height of the slider in pixels. (min: 200)                 |   |   |   |
| backgroundColor            | string   | undefined     | Sets the background color of the slider container.                          |   |   |   |
| sliderMaxValue             | number   |            10 | Sets the maximum value selectable on the slider.                            |   |   |   |
| sliderMinValue             | number   |             0 | Sets the minimum value selectable on the slider.                            |   |   |   |
| sliderStepvalue            | number   |             1 | Sets the step value for increments on the slider.                           |   |   |   |
| sliderDefaultValue         | number   |             0 | Sets the initial value displayed on the slider. (clamped)                   |   |   |   |
| centerImageUrl             | string   | centerImage   | Sets the image URL to display in the center of the progress circle.         |   |   |   |
| onChange                   | function | () => {}      | A callback function triggered when the slider value changes.                |   |   |   |
| dashColor                  | string   | #819ca7       | Sets the color of the circular dash pattern.                                |   |   |   |
| dashWidth                  | string   | 2px           | Sets the width of the circular dash pattern (CSS value).                    |   |   |   |
| progressBarColor           | string   | white         | Sets the color of the progress bar within the circle.                       |   |   |   |
| progressBarBackgroundColor | string   | #718993       | Sets the background color of the progress bar within the circle.            |   |   |   |
| centerTextFontSize         | number   | 20            | Sets the font size of the value displayed in the center (px).               |   |   |   |
| centerTextFontColor        | string   | white         | Sets the font color of the value displayed in the center.                   |   |   |   |
| progressBarWidth           | number   | 10            | Sets the width of the progress bar within the circle (px).                  |   |   |   |
| sliderBackgroundColor      | string   | white         | Sets the background color of the slider track.                              |   |   |   |
| sliderFilledColor          | string   | #00d5b6       | Sets the color of the filled portion of the slider track based on progress. |   |   |   |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
Runs test cases

