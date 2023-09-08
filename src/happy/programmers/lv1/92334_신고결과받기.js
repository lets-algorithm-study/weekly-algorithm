/*
* [제목] 신고 결과 받기


* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/92334

* [문제] 

*/

function solution(id_list, report, k) {
  var answer = [];

  // 중복 신고 제거
  let _report = [...new Set(report)];

  // 한 유저가 같은 유저를 여러번 신고해도 한번으로만 처리됨
  // k 번만큼 신고먹으면 퇴출
  // 퇴출되면 퇴출에 관여한 신고한 사람에게 매일이 가는데 이 메일이 온 사람들을 return함

  /*
    	{
          frodo: { reporter: [ 'muzi', 'apeach' ], value: 2 },
          neo: { reporter: [ 'frodo', 'muzi' ], value: 2 },
          muzi: { reporter: [ 'apeach' ], value: 1 }
        }
    */
  let tmp = {};
  _report.forEach((item, i) => {
    const [reporter, ban] = item.split(' ');

    if (tmp[ban] && tmp[ban].reporter.includes(reporter)) return;

    if (tmp[ban]) {
      tmp[ban] = {
        reporter: [...tmp[ban].reporter, reporter],
        value: tmp[ban].value + 1,
      };
    } else {
      tmp[ban] = {
        reporter: [reporter],
        value: 1,
      };
    }
  });

  let tmp2 = {};

  // { muzi: 2, apeach: 1, frodo: 1 }
  id_list.forEach(item => {
    if (tmp[item] && tmp[item].value === 2) {
      tmp[item].reporter.forEach(item => {
        if (tmp2[item]) {
          tmp2[item] += 1;
        } else {
          tmp2[item] = 1;
        }
      });
    }
  });

  id_list.forEach(item => {
    if (tmp2[item]) answer.push(tmp2[item]);
    else answer.push(0);
  });

  return answer;
}
