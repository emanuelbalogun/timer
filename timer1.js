const beep = function () {
  process.stdout.write("\x07");
};
//retirive time from the command line and store in an array
let alarm = [2, 3, 5, 67, 8, 9];

for (let i = 0; i < alarm.length; i++) {
  if (Number(alarm[i]) < 0 || !alarm[i]) {
    continue;
  }
  setTimeout(beep, alarm[i] * 1000);
}
