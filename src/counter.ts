// add, subtract, zero
export function setupCounter(
  add: HTMLButtonElement,
  subtract: HTMLButtonElement,
  zero: HTMLButtonElement,
  label: HTMLElement,
) {
  let counter = 0;
  add.innerHTML = "+1";
  subtract.innerHTML = "-1";
  zero.innerHTML = "0";

  label.innerHTML = `Count is 0`;
  const setCounter = (count: number) => {
    counter = count;
    label.innerHTML = `Count is ${counter}`;
  };
  add.addEventListener("click", () => setCounter(counter + 1));
  subtract.addEventListener("click", () => setCounter(counter - 1));
  zero.addEventListener("click", () => setCounter(0));
  setCounter(0);
}
