function solution(park, routes) {
  // 1. park 그리기
  // 2. park 좌표값
  var answer = [];
  const Ey = 1;
  const Sx = 1;
  const Wy = -1;
  const Nx = -1;
  const parkMap = new Map();
  const parkMap2 = new Map();
  const maxYLength = park[0].length;
  const maxXLength = park.length;

  for (let i = 0; i < park.length; i++) {
    for (let k = 0; k < park[i].length; k++) {
      parkMap.set([i, k], park[i][k]);
      parkMap2.set(park[i][k], [i, k]);
    }
  }

  const startPoint = parkMap2.get("S");
  let startPointX = startPoint[0];
  let startPointY = startPoint[1];

  for (let j = 0; j < routes.length; j++) {
    const routeArry = routes[j].split(" ");
    const route = routeArry[0];
    const count = routeArry[1];

    if (route === "E") {
      for (let c = 0; c < count.length; c++) {
        startPointY = startPointY + Ey;
        console.log(parkMap.get([startPointX, startPointY]));
        if (
          startPointY > maxYLength ||
          parkMap.get([startPointX, startPointY]) == "X"
        ) {
          console.log(startPointX, startPointY);
          break;
        }
      }
    }
    if (route === "S") {
      startPointX = startPointX + Sx * count;
      if (startPointX > maxXLength) {
        break;
      }
    }
    if (route === "W") {
      startPointY = startPointY + Wy * count;
      if (startPointY > maxYLength) {
        break;
      }
    }
    if (route === "N") {
      startPointX = startPointX + Nx * count;
      if (startPointX > maxXLength) {
        break;
      }
    }
  }

  return answer;
}
