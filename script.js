// Get the input, button, and output elements
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Add an onClick event listener to the button
button.addEventListener('click', () => {
  const number = Number(input.value);

  // Create a promise that resolves with the input number after 2 seconds
  new Promise((resolve, reject) => {
    setTimeout(() => {
      isNaN(number) ? reject('Input is not a number') : resolve(number);
    }, 2000);
  })
  .then(result => {
    output.textContent = `Result: ${result}`;
    return new Promise(resolve => setTimeout(() => resolve(result), 2000));
  })
  .then(result => {
    const multiplied = result * 2;
    output.textContent = `Result: ${multiplied}`;
    return new Promise(resolve => setTimeout(() => resolve(multiplied), 1000));
  })
  .then(result => {
    const subtracted = result - 3;
    output.textContent = `Result: ${subtracted}`;
    return new Promise(resolve => setTimeout(() => resolve(subtracted), 1000));
  })
  .then(result => {
    const divided = result / 2;
    output.textContent = `Result: ${divided}`;
    return new Promise(resolve => setTimeout(() => resolve(divided), 1000));
  })
  .then(result => {
    const added = result + 10;
    output.textContent = `Result: ${added}`;
    return new Promise(resolve => setTimeout(() => resolve(added), 1000));
  })
  .then(result => {
    output.textContent = `Final Result: ${result}`;
  })
  .catch(error => {
    output.textContent = `Error: ${error}`;
  });
});
