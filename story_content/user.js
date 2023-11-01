function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64B9b3GYaki":
        Script1();
        break;
      case "6kIFRj5BRpq":
        Script2();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();
const pathElement = document.querySelector('.next-icon path');
const newDValue = "M2.81685219,7.60265083 L9.00528946,1.41421356 L7.5910759,-1.27897692e-13 L1.55431223e-13,7.5910759 L0.0115749356,7.60265083 L1.55431223e-13,7.61422577 L7.5910759,15.2053017 L9.00528946,13.7910881 L2.81685219,7.60265083 Z";
const newTransformValue = "rotate(180, 5, 8)";
pathElement.setAttribute('d', newDValue);
pathElement.setAttribute('transform', newTransformValue);
}

function Script2()
{
  const player = GetPlayer();
const pathElement = document.querySelector('.next-icon path');
const newDValue = "M 10.95 8.75 Q 11 9 11 9.25 10.95 11.15 9.7 12.4 8.4 13.7 6.5 13.75 4.6 13.7 3.3 12.4 2.05 11.15 2 9.25 2.05 7.3 3.3 6.05 4.398828125 4.998828125 6 4.75 L 6 6.9 Q 6.05 7.75 6.85 7.35 L 11.35 4.3 Q 11.7 4.05 11.7 3.75 11.7 3.45 11.35 3.2 L 6.85 0.15 Q 6.05 -0.3 6 0.6 L 6 2.75 Q 3.4517578125 3.001171875 1.8 4.75 0.05 6.6 0 9.25 0.05 12 1.9 13.85 3.75 15.65 6.5 15.75 9.25 15.65 11.1 13.85 12.95 12 13 9.25 13 9 13 8.75 L 10.95 8.75 Z";
const newTransformValue = "";
pathElement.setAttribute('d', newDValue);
pathElement.setAttribute('transform', newTransformValue);
}

