const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

const testCase = input.map(item => item.split(' ').map(Number));

solution(testCase);

function solution(testCase) {
  const infoList = [];
  const taskList = [];

  testCase.forEach((item, idx) => {
    if (idx % 2 === 0) {
      infoList.push(item);
    } else {
      taskList.push(item);
    }
  });

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    let [_, cursor] = infoList[i];

    let count = 0;
    while (true) {
      if (task.find(item => task[0] < item) !== undefined) {
        task.push(task.shift());
        cursor = cursor === 0 ? task.length - 1 : --cursor;
      } else {
        count++;
        if (cursor === 0) {
          console.log(count);
          break;
        }

        task.shift();
        cursor--;
      }
    }
  }
}
