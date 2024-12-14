<<<<<<< HEAD
function solution(arr) {
  const uniq = [...new Set(arr)];
  console.log(uniq)
  uniq.sort((a,b) => b -a );
  console.log(uniq)
  return uniq;
}

=======
function solution(arr) {
  const uniq = [...new Set(arr)];
  console.log(uniq)
  uniq.sort((a,b) => b -a );
  console.log(uniq)
  return uniq;
}

>>>>>>> 72ee9b7eb71f3307325eb99b889fb05b5e56fd19
solution([4,2,2,1,3,4]);