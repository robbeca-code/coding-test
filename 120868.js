function solution(sides) {
  let answer = [];
  sides.sort((a, b) => a - b);

  // sides[1]이 가장 긴 변인 경우
  // 나머지 두 변의 합보다 작아야 합니다.
  for(let i=1; i<=sides[1]; i++) {
    if(sides[0] + i > sides[1]) answer.push(i);
  }

  // 나머지 한 변이 가장 긴 변인 경우
  // 나머지 두 변의 합보다 작아야 하고, 가장 긴 변보다 커야합니다.
  for(let i=1; i<(sides[0] + sides[1]); i++) {
    if(sides[1] < i) answer.push(i);
  }

  // 변의 길이가 되는 값을 answer의 저장하고 배열의 길이로 반환해서 몇 개가 있는지 정답을 제출합니다.
  return answer.length;
}
