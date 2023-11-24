// function solution(s) {
//   var answer = [];
//   const pointer = 0;

//   this.search = function (str, pointer) {
//     let correct = 0;
//     let incorrect = 0;
//     let x = str[pointer];

//     for (let i = pointer + 1; i < str.length; i++) {
//       if (str[i] != x) {
//         incorrect++;
//       } else {
//         correct++;
//       }
//     }

//     if (incorrect === correct) {
//       if (str.length > 1) {
//         const ans = str.slice(0, pointer + 1);
//         answer.push(ans);
//         const newStr = str.slice(pointer + 1);
//         if (newStr.length > 1) {
//           this.search(newStr, 0);
//         }

//         console.log(pointer);
//         console.log(x);
//         console.log(newStr);
//       }
//     } else {
//       if (str.length > 1) {
//         this.search(str, pointer + 1);
//       }
//     }
//   };
//   this.search(s, pointer);
//   return answer.length;
// }
function solution(s) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    stack.push(s[i]);

    const same = stack.filter((item) => item === stack[0]);
    const notSame = stack.filter((item) => item !== stack[0]);

    if (same.length === notSame.length) {
      count += 1;
      stack = [];
    }
  }

  if (stack.length !== 0) {
    count += 1;
  }

  return count;
}
