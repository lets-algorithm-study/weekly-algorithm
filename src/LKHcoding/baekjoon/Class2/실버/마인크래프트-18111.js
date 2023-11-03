const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const firstArr = input.shift().split(' ').map(Number);
const data = input.map(item => item.split(' ').map(Number));

solution(firstArr, data);

function solution(firstArr, data) {
  const [N, M, B] = firstArr; // 세로 크기 N, 가로 크기 M, 인벤토리에 있는 블록의 개수 B
  let minTime = Infinity; // 최소 시간을 매우 큰 값으로 초기 설정
  let maxHeight = -1; // 최대 높이를 -1로 초기 설정 (최소 높이보다 낮은 값)

  // 가능한 높이의 최소값과 최대값을 계산합니다. (0부터 256까지의 가능한 높이)
  let minHeight = Math.min(...data.flat());
  let maxPossibleHeight = Math.max(...data.flat());

  // 모든 가능한 높이에 대해서 시간을 계산합니다.
  for (let 목표높이 = minHeight; 목표높이 <= maxPossibleHeight; 목표높이++) {
    let time = 0; // 필요한 시간
    let inventory = B; // 현재 인벤토리에 있는 블록의 수

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        let 현재높이 = data[i][j]; // 현재 위치의 높이
        if (현재높이 < 목표높이) {
          // 현재 위치의 높이가 목표 높이보다 낮은 경우
          time += 목표높이 - 현재높이; // 블록을 추가하는 시간을 더함
          inventory -= 목표높이 - 현재높이; // 인벤토리에서 블록을 사용함
        } else if (현재높이 > 목표높이) {
          // 현재 위치의 높이가 목표 높이보다 높은 경우
          time += (현재높이 - 목표높이) * 2; // 블록을 제거하는 시간을 더함 (2초 소요)
          inventory += 현재높이 - 목표높이; // 제거된 블록을 인벤토리에 추가함
        }
      }
    }

    // 인벤토리에 블록이 부족하지 않고, 필요한 시간이 현재 최소 시간보다 적거나 같은 경우
    if (inventory >= 0 && time <= minTime) {
      minTime = time; // 최소 시간을 업데이트
      maxHeight = 목표높이; // 해당 높이를 최대 높이로 설정
    }
  }

  // 최소 시간과 그 때의 높이를 출력합니다.
  console.log(`${minTime} ${maxHeight}`);
}
