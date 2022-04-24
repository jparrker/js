function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let total = blueStart + redStart;
  let left = total - bluePulled - redPulled;
  let numBlue = blueStart - bluePulled;
  let numRed = redStart - redPulled;
  return numBlue / left;
}
