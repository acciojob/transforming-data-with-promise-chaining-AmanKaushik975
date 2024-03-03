//your JS code here. If required.
    const input = document.getElementById('ip');
    const button = document.getElementById('btn');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
      const number = input.value;

      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!isNaN(number)) {
            resolve(number);
          } else {
            reject(new Error('Input is not a number'));
          }
        }, 2000);
      })
      .then((result) => {
        output.textContent = `Result: ${result}`;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(result);
          }, 2000);
        });
      })
      .then((result) => {
        const multiplied = result * 2;
        output.textContent = `Result: ${multiplied}`;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(multiplied);
          }, 1000);
        });
      })
      .then((result) => {
        const subtracted = result - 3;
        output.textContent = `Result: ${subtracted}`;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(subtracted);
          }, 1000);
        });
      })
      .then((result) => {
        const divided = result / 2;
        output.textContent = `Result: ${divided}`;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(divided);
          }, 1000);
        });
      })
      .then((result) => {
        const added = result + 10;
        output.textContent = `Result: ${added}`;
        return added;
      })
      .then((result) => {
        output.textContent = `Final Result: ${result}`;
      })
      .catch((error) => {
        output.textContent = `Error: ${error.message}`;
      });
    });
