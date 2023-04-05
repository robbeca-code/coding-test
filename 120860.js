function solution(dots) {
  let l = 0;
  let w = 0;

  // x 좌표에서 가장 큰 수와 가장 작은 수를 빼서 가로를 구합니다.
  w = Math.max(...dots.map(v => v[0])) - Math.min(...dots.map(v => v[0]));
  
  // y좌표에서 가장 큰 수와 가장 작은 수를 빼서 세로를 구합니다.
  l = Math.max(...dots.map(v => v[1])) - Math.min(...dots.map(v => v[1]));

  // 가로 * 세로를 해서 직사각형의 넓이를 구합니다.
  return w * l;
}




/*  다른 사람의 풀이  */
function solution(dots) {
  let x = [],
      y = [];

  // x와 y를 구분해서 저장합니다.
  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  // x에서 가장 큰 수와 가장 작은 수의 차와, y의 가장 큰 수와 가장 작은 수의 차를 곱해서 직사각형의 넓이를 구합니다.
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
