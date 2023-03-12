function solution(n, numlist) {
  let answer = [];
  
  // n의 배수를 구하기 위해서 어떤 수를 n으로 나눴을 때 나머지가 0이면 배수인 것을 확인할 수 있습니다.
  numlist.forEach(item => {
    item % n === 0 ? answer.push(item) : null; 
  });

  return answer;
}


/*  다른 사람이 푼 해결방법  */
function solution(n, numlist) {
  // filter는 조건문에 맞는 값으로 이루어진 배열을 반환하는 메서드입니다.
  // 이 문제를 풀 때 적합한 메서드라는 것을 알게 되었습니다.
  return numlist.filter(num => num % n === 0);
}
