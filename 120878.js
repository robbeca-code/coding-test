function solution(a, b) {
  let answer = [];
  let j = 2;
  let max = a > b ? a : b;

  // 분자와 분모를 약분해서 기약분수로 만듭니다.
  for(let i=0; i<max; i++) {
    if(a % i === 0 && b % i === 0) {
      a = a / i;
      b = b / i;
    }
  }

  // 유한소수를 알아내기 위해 분모를 2부터 나눴을 때 소인수가 2 또는 5만 있는지 확인합니다.
  while(Math.floor(b / j) > 0) {
    if(b % j === 0) {
      if(j % 2 === 0 || j % 5 === 0) {
        answer.push(true);
      }
      else {
        answer.push(false);
      }
    }
    j++;
  }

  // false가 없는 것은 유한소수이므로 1을 반환하고 아니라면 2를 반환합니다.
  return answer.indexOf(false) === -1 ? 1 : 2;
}





/*  다른 사람의 풀이  */
function solution(a, b) {
  let n = 1;
  
  // n에 분자와 분모를 약분이 가능한 수를 저장합니다.
  for (let i = 1; i <= Math.min(a,b); i++) {
    if (a%i===0 && b%i===0) n = i;
  }

  // b를 약분 가능한 수로 나눈 뒤, 유한소수인지 확인하기 위해 2와 5로 나눕니다.
  b/=n;
  while (b%2===0) b/=2;
  while (b%5===0) b/=5;

  // 이때 b가 1이라면 유한소수이므로 1을 반환하고 아니라면 2를 반환합니다.
  return b === 1 ? 1 : 2;   
}
