export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const genRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max >= 1 ? max : 6)) + 1;
}