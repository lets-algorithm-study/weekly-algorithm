// const readline = require("readline");

// const rl = readline.createInterface({
// 	input: process.stdin,
//   output: process.stdout
// });

// rl.on("line", (_input) => {
    

//     const inputData = _input.split(" ");
//     const A = parseInt(inpㄷutData[0]);
//     const B = parseInt(inputData[1]);
//     console.log(A);
//     console.log(B);

//     // 테스트 코드 여기에 입력해
    
//     rl.close();
//   })


// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split(' ');

// const [year] = input.map(num => +num);

// if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
//   console.log('1');
// }else{
//   console.log('0');
// }





// const fs = require('fs');
// const filePath = '/dev/stdin';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// const year = Number(input[0]);

// if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
//   console.log('1');
// }else{
//   console.log('0');
// }
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let fs = require('fs');   // file system 라이브러리를 가져와서 fs 변수에 담음

const filePath = process.platform === 'win32' ? './input.txt' : '/dev/stdin';   // 만약에 너 pc가 window면 input.txt파일을 읽고, 백준에 제출하는 경우면 백준 인풋 경로를 가져옴

let input = fs.readFileSync(filePath).toString().split(' ');  // input.txt값을 읽어서 문자열로 변환 후, 다시 배열로 변환

const [_num1, _num2, operator] = input;
const num1 = _num1;
const num2 = _num2;

// 여기다 너의 코드를 넣어

const avg = (math + science) / 2;
if(avg >= 90){
  console.log("A");
}else if(avg >= 80){
  console.log("B");
}else if(avg >= 70){
  console.log("C");
}else{
  console.log("D");
}
