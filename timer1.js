const args = process.argv.slice(2);

const beep = function () {
  process.stdout.write('\x07');
};

for (const arg of args) {
  if (!isNaN(arg) && arg > 0) {
    setTimeout(() => {
      beep();
    }, arg * 1000);
  }
}
