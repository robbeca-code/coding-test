function solution(num, k) {
  // num에서 k의 위치를 찾아야 하기 때문에 문자열로 변환해서 indexOf로 자리를 가져옵니다.
  let index = String(num).indexOf(String(k));
  
  // index는 0부터 시작하기 때문에 따로 1을 더해줘야 k의 자리 수를 정확하게 알 수 있습니다.
  return index != -1 ? index + 1 : -1;
}
