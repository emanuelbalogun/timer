//retrieve alarm time form the comand line
let alarm = process.argv.slice(2);

for (let i = 0; i < alarm.length; i++) {
  if (Number(alarm[i]) < 0 || !alarm[i]) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  },alarm[i] * 1000);
}

