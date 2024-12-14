// 06 실패율
//문제 이해 못 함ㅎ
//새 용어를 정의하는 부분이 나오면 반드시 이해하고 넘어가야한다.

//N : 전체 스테이지 개수
//stages : 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
function solution(N, stages){
  //스테이지별 도전자 수를 구함
  const challenger = new Array(N + 2).fill(0);
  for(const stage of stages){
    challenger[stage] += 1;
  }

  //스테이지별 실패한 사용자 수 계산
  const fails = {};
  let total = stages.length;

  //각 스테이지를 순회하며, 실패율 계산
  for (let i = 1; i <= N; i++){
    if(challenger[i] === 0) {
      //도전한 사람이 없는 경우, 실패율은 0
      fails[i] = 0;
      continue;
    }

    //실패율 계산
    fails[i] = challenger[i] / total;

    //다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌
    total -= challenger[i];
  }

  //실패율이 높은 스테이지부터 내림차순으로 정렬
  const result = Object.entries(fails).sort((a,b) => b[1] - a[1]);

  //스테이지 번호만 반환
  return result.map((v) => Number(v[0]));

}