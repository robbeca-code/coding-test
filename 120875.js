function solution(dots) {
  let answer = [];

  function calculation(a, b, c, d) {
    // 직선의 기울기를 구합니다.
    let gradient1 = (b[1] - a[1]) / (b[0] - a[0]);
    let gradient2 = (d[1] - c[1]) / (d[0] - c[0]);

    // 기울기가 같다면 평행하면서 일치한다는 의미이기 때문에 answer에 1을 저장합니다.
    if(gradient1 === gradient2) {
      answer.push(1);
    }
    else {
      answer.push(0);
    }
  }

  // (좌표1, 좌표2) (좌표3, 좌표4)일 때
  calculation(dots[0], dots[1], dots[2], dots[3]);
  
  // (좌표1, 좌표3) (좌표2, 좌표4)일 때
  calculation(dots[0], dots[2], dots[1], dots[3]);
  
  // (좌표1, 좌표4) (좌표2, 좌표3)일 때
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return answer.indexOf(1) !== -1 ? 1 : 0;
}
