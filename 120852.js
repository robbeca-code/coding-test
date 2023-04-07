function solution(n) {
  let answer = [];
  let i = 2;

  // n이 2보다 같거나 클 때까지 while문을 작동시킵니다.
  while(n >= 2) {
    
    // n을 i로 나눴을 때 나머지가 0이면 i가 n의 소수이므로 answer에 i를 삽입합니다.
    // n을 i로 나눈 몫을 n에 저장합니다.
    if(n % i === 0) {
      answer.push(i);
      n = Math.floor(n / i);
    }
    
    // 아니라면 i에 +1을 해줍니다.
    else {
      i++;
    }
  }

  // 중복되는 소수가 있을 수 있기 때문에 new Set을 활용해서 중복을 제거합니다.
  answer = [...new Set(answer)];

  return answer;
}
