export const prevMoving = (step, setMoving, setClicks, moving, clicks) => {
  if (moving - step > 0) {
    setMoving(Math.max(moving - step, 0));
    setClicks(clicks => clicks - 1);
  } else {
    setMoving(0);
    setClicks(clicks => clicks - 1);
  }
};

export const nextMoving = (step, arrLength, setMoving, setClicks, moving, clicks) => {
  if (moving + step < arrLength - step) {
    setMoving(Math.min(moving
      + step, arrLength - step));
      setClicks(clicks => clicks + 1);
  } else {
    setMoving(arrLength - step);
    setClicks(clicks => clicks + 1);
  }
};
