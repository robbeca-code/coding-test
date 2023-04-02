function solution(numbers) {
  let answer = [];

  // numbers에 값이 2개일 땐 해당 값들을 곱한 것이 최댓값이므로 바로 return 합니다.
  if(numbers.length === 2) {
    return numbers[0] * numbers[1];
  }
  
  // 2개 이상일 땐, numbers를 오름차순 정렬하고
  // numbers에 음수와 양수가 있다면을 가정해서 작은 수 2개를 곱한 것과 큰 수 2개를 곱한 다음
  // 더 큰 수를 반환해서 정답을 구합니다.
  else {
    numbers.sort((a, b) => a - b);
    answer.push(numbers[0] * numbers[1]);
    answer.push(numbers[numbers.length - 1] * numbers[numbers.length - 2]);

    return Math.max(answer[0], answer[1]);
  }
}
