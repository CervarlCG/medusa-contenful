export const humanizeAmount = (amount: number): number => {
  const divisor = 100;
  return amount / divisor;
};
