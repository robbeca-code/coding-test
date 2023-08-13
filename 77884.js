function solution(left, right) {
  let answer = 0;
  let start = left;

  // left부터 right까지 숫자들의 약수를 구해야 하므로 해당 반복문을 활용했습니다.
  while(start <= right) {
    // 약수의 개수가 홀수가 되는 수는 제곱근수이기 때문에 Math.sqrt()로 짝수인지 홀수인지를 구분합니다.
    const result = Math.sqrt(start);

    // 제곱근수라면 1로 나눴을 때 나머지가 0이 되므로 answer에서 값을 빼고, 그렇지 않다면 answer에 값을 더합니다.
    if(result % 1 === 0) {
      answer -= start;
    } else {
      answer += start;
    }
    
    start += 1;
  }
  
  return answer;
}
