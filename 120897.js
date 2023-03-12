function solution(n) {
  let answer = [];
  
  // n의 약수를 구하기 위해서 1부터 n까지의 수로 나눴을 때 나머지가 0이면
  // n의 약수이므로 answer에 값을 삽입합니다.
  for(let i=1; i<(n+1); i++) {
    if(n % i === 0) {
        answer.push(i);
    }
  }
  
  // n의 약수가 들어있는 배열을 반환합니다.
  return answer;
}
