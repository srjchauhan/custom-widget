import * as React from "react";

// Note: Canvas size is 200x200
// Note: Not using Any library for this project so building ProgressBar from scratch

interface ICircularProgressProps {
  angle?: number;
  imageUrl: string;
  height?: number;
  width?: number;
  progressWidth?: number;
  progressBarColor?: string;
  progressBarBackgroundColor?: string;
  value?: number;
  fontSize?: number;
  fontColor?: string;
}

/**
 * Renders a circular progress component on a canvas.
 *
 * @param {ICircularProgressProps} angle - The angle of the circular progress (default: 90 degrees)
 * @param {ICircularProgressProps} imageUrl - The URL of the image to be displayed
 * @param {ICircularProgressProps} height - The height of the canvas (default: 200)
 * @param {ICircularProgressProps} width - The width of the canvas (default: 200)
 * @param {ICircularProgressProps} progressWidth - The width of the progress bar (default: 10)
 * @param {ICircularProgressProps} progressBarColor - The color of the progress bar (default: "white")
 * @param {ICircularProgressProps} progressBarBackgroundColor - The background color of the progress bar (default: "#718993")
 * @param {ICircularProgressProps} value - The value to display on the progress bar (default: 0)
 * @param {ICircularProgressProps} fontSize - The font size of the displayed value (default: 20)
 * @param {ICircularProgressProps} fontColor - The color of the displayed value (default: "white")
 * @return {JSX.Element} The canvas element displaying the circular progress
 */
export default function CircularProgress({
  angle = 90,
  imageUrl,
  height = 200,
  width = 200,
  progressWidth = 10,
  progressBarColor = "white",
  progressBarBackgroundColor = "#718993",
  value = 0,
  fontSize = 20,
  fontColor = "white",
}: ICircularProgressProps) {
  const canvasRef = React.createRef<HTMLCanvasElement>();
  const radians = React.useMemo(() => (angle - 90) * (Math.PI / 180), [angle]);
  const completeCircleRadian = 2 * Math.PI;
  const startRadian = 0 - 90 * (Math.PI / 180);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const image = new Image();

    const drawArc = (
      centerX: number,
      centerY: number,
      radius: number,
      startAngle: number,
      endAngle: number,
      color: string,
      isStroke: boolean = false
    ) => {
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (isStroke && startAngle !== endAngle) {
        ctx.strokeStyle = color;
        ctx.lineWidth = progressWidth;
        ctx.stroke();
      }
      else {
        ctx.fillStyle = color;
        ctx.fill();
      }
    };

    const drawCircleImage = (
      centerX: number,
      centerY: number,
      radius: number
    ) => {
      const aspectRatio = image.width / image.height;
      let clipRadius;
      if (aspectRatio > 1) {
        clipRadius = radius 
      } else {
        clipRadius = radius;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, clipRadius, 0, 2 * Math.PI);
      ctx.clip();

      const imageX = centerX - clipRadius;
      const imageY = centerY - clipRadius;
      const imageWidth = clipRadius * 2;
      const imageHeight = clipRadius * 2;
      ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight);

      ctx.restore();
    };

    const drawText = (
      text: string,
      centerX: number,
      centerY: number,
      fontSize: number,
      textColor: string
    ) => {
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, centerX, centerY);
    };
    image.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY);
      const progressBarRadius = radius - (progressWidth / 2);
      const progressBarBackgroundRadius = progressBarRadius - (progressWidth / 2);
      drawArc(centerX, centerY, progressBarRadius, startRadian, radians, progressBarColor, true);
      drawArc(
        centerX,
        centerY,
        progressBarBackgroundRadius,
        0,
        completeCircleRadian,
        progressBarBackgroundColor
      );
      drawCircleImage(centerX, centerY, progressBarBackgroundRadius-20);
      drawText(value.toString(), centerX, centerY, fontSize, fontColor);
    };
    image.src = imageUrl;

  }, [
    imageUrl,
    canvasRef,
    radians,
    progressWidth,
    completeCircleRadian,
    progressBarColor,
    progressBarBackgroundColor,
    value,
    fontSize,
    fontColor,
    startRadian,
  ]);

  return <canvas ref={canvasRef} width={height} height={width} />;
}
