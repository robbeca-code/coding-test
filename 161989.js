function solution(n, m, section) {
  // 롤러로 칠한 횟수를 저장하는 변수
  let answer = 0;
  // 벽 개수만큼 배열을 생성합니다.
  let wall = new Array(n);
  // 칠한 벽을 저장하는 변수입니다.
  let complete_wall = [];
  // 롤러가 벽에서 벗어나지 않고 최대로 칠할 수 있는 인덱스 저장하는 변수입니다.
  let max_num = 0;

  // 벽의 개수만큼 배열을 만듭니다.
  // 1로 채운 다음 인덱스에 0부터 시작해서 1씩 증가하는 값으로 수정합니다.
  wall.fill(1);
  wall.forEach((_,i)=>{
    wall[i]=i+1;
  });

  // wall 배열에서 롤러의 길이만큼 -로 값을 가져올 때 가장 첫 번째 값을 저장합니다.
  max_num = wall.slice(-m)[0];

  
  section.forEach(num => {
    // 색칠되지 않은 벽인지 확인하는 조건문입니다.
    // 색칠되지 않았다면 answer에 1을 더합니다.
    if(complete_wall.indexOf(num) === -1){
      answer += 1;

      // 롤러가 벽을 넘어갈 때와 넘어가지 않을 때 시작점을 다르게 해서 complete_wall에 저장합니다.
      if(num > max_num){
        complete_wall = wall.slice(max_num);
      } else {
        complete_wall = wall.slice(num-1, num+m-1);
      }
    }
  });

  // 최종 롤러 횟수를 반환합니다.
  return answer;
}
