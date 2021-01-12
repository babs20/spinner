let time = 100;
const spinnerChar = ['|', '/', '-', '\\', '|'];
for (const char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, time);
  time += 200;
}