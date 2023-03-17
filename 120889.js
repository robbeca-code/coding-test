function solution(sides) {
  // sides를 오름차순으로 정렬합니다.
  sides = sides.sort((a, b) => a - b);
  
  // sides에서 큰 수를 찾아서 제거한 다음 나머지만 남깁니다.
  let long_leg = sides.splice(sides.indexOf(Math.max(sides[0], sides[1], sides[2])), 1);

  // 남은 작은 수들의 합이 큰 수보다 크면 1을, 작으면 2를 반환합니다.
  return sides[0] + sides[1] > long_leg ? 1 : 2;
}




/*  다른 사람의 풀이  */
function solution(sides) {
  // 오름차순으로 정렬했기 때문에 이미 큰 수를 찾았습니다.
  sides = sides.sort((a,b) => a-b);
  
  // 작은 수들의 합과 큰 수를 비교해서 1 또는 2를 반환합니다.
  return sides[0]+sides[1] > sides[2] ? 1 : 2;
}
