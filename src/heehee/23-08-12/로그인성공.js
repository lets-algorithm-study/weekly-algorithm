// 문제 설명
// 머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

function solution(id_pw, db) {
  const id = id_pw[0];
  const pw = id_pw[1];
  let answer = "login";

  if (id.length < 1 || id.length > 15) return;
  if (pw.length < 1 || pw.length > 6) return;
  if (db.length < 1 || db.length > 10) return;

  const idExist = db.filter((v) => v[0] === id);
  if (idExist.length < 1) {
    answer = "fail";
    return answer;
  }

  idExist.forEach((db_id_pw) => {
    const dPw = db_id_pw[1];
    if (pw !== dPw) {
      answer = "wrong pw";
    }
  });

  return answer;
}
