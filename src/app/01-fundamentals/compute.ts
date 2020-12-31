const compute = (number: number = 0): number => {
  return number >= 0 ? (number += 1) : 0;
};

export { compute };
