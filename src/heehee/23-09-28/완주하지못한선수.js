function solution(participant, completion) {
    
    const _completion = completion.slice();
    for (let i = 0; i < _completion.length; i++) {
      const idx = participant.indexOf(_completion[i]);
      participant.splice(idx, 1);
    }
    return participant.join('');;
  }


//   function solution(participant, completion) {
//     const map = new Map();
//     participant.forEach(name => map.set(name, (map.get(name) || 0) + 1));
//     completion.forEach(name => map.set(name, (map.get(name) || 0) - 1));
//     for (const [name, value] of map) {
//         if (value) {
//             return name;
//         }
//     }
// }