function solution(array, n) {
  let answer = 0;
  let idx = 0;
  let left_num = 0;
  let right_num = 0;

  array.push(n);
  
  // array에 n을 삽입하고 오름차순으로 정렬해서 n의 왼쪽과 오른쪽에 있는 값을 가져옵니다.
  idx = array.sort((i, j) => i - j).indexOf(n);
  left_num = n - array[idx-1];
  right_num = array[idx+1] - n;

  // n과 빼서 차이가 더 적은 값을 반환하고,
  // 만약 차이가 같다면 둘 중 가장 작은 수를 반환합니다.
  return left_num > right_num ? array[idx+1] : left_num === right_num ? Math.min(array[idx-1], array[idx+1]) : array[idx-1];
}




/*  다른 사람의 풀이  */
function solution(array, n) {
  
  // reduce를 활용해서 a(전의 값), n(다음 값)을 가지고 n과 빼기 연산을 수행합니다.
  // 차가 가장 적은 값을 반환하거나
  // 만약 차가 같다면 수 중 가장 작은 값을 반환하고 아니라면 c를 반환합니다.
  return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}
