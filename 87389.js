function solution(n) {
  // n과 나눴을 때 나머지가 1이 되게 하는 수를 저장하는 변수입니다.
  let answer = 0;

  // n에서 -1을 한 이유는 result의 약수 중 하나가 n과 나눴을 때 나머지가 1이 되게 한 수를 알 수 있기 때문입니다.
  let result = n - 1;

  // result와 i를 나눴을 때 나머지가 0이 되는 수가 n과 나눴을 때 나머지가 1이 되게 한 수입니다.
  // 2부터 시작한 이유는 n과 1을 나누면 무조건 나머지가 0이 되기 때문입니다.
  for(let i=2; i<=result; i++) {
    if(result % i === 0) {
      answer = i;
      break;
    }
  }
  
  return answer;
}
