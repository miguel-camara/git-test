// add, subtract, zero
export function setupCounter(
  add: HTMLButtonElement,
  subtract: HTMLButtonElement,
  zero: HTMLButtonElement,
  label: HTMLElement,
) {
  console.log("Esto es una prueba");

  let counter = 0;
  add.innerHTML = "+1";
  subtract.innerHTML = "";
  zero.innerHTML = "0";

  label.innerHTML = `El contador es 0`;
  const setCounter = (count: number) => {
    counter = count;
    label.innerHTML = `Count is ${counter}`;
  };
  add.addEventListener("click", () => setCounter(counter + 1));
  subtract.addEventListener("click", () => setCounter(counter - 1));
  zero.addEventListener("click", () => setCounter(0));
  setCounter(0);
}
