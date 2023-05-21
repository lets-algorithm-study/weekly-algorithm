// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);

  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';

  //     const user = id_pw;

  //     for(let i = 0; i <= db.length - 1; i++) {
  //         if(user[0] !== db[i][0]) {
  //             continue;
  //         }

  //         if (user[1] === db[i][1]) {
  //             return 'login';
  //         } else {
  //             return 'wrong pw';
  //         }
  //     }

  //     return 'fail';
}
