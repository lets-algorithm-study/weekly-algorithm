function solution(arr) {
  const uniq = [...new Set(arr)];
  console.log(uniq)
  uniq.sort((a,b) => b -a );
  console.log(uniq)
  return uniq;
}

solution([4,2,2,1,3,4]);