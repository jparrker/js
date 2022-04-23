function pointsPer48(ppg, mpg) {
  if (ppg === 0) return 0;
  return Math.round((ppg / mpg) * 48 * 10) / 10;
}
