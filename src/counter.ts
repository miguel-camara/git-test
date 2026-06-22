export function setupCounter(
  sum: HTMLButtonElement,
  res: HTMLButtonElement,
  zero: HTMLButtonElement,
  label: HTMLElement,
) {
  let counter = 0;
  sum.innerHTML = "+1";
  res.innerHTML = "-1";
  zero.innerHTML = "0";

  label.innerHTML = `Count is 0`;
  const setCounter = (count: number) => {
    counter = count;
    label.innerHTML = `Count is ${counter}`;
  };
  sum.addEventListener("click", () => setCounter(counter + 1));
  res.addEventListener("click", () => setCounter(counter - 1));
  zero.addEventListener("click", () => setCounter(0));
  setCounter(0);
}
