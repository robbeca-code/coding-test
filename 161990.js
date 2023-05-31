function solution(wallpaper) {
  // 최종 값을 저장할 answer, y좌표가 될 수 있는 값들을 저장할 y_case, x좌표가 될 수 있는 값들을 저장할 x_case입니다.
  let answer = [];
  let y_cases = [];
  let x_cases = [];
  
  // y좌표가 될 경우의 수와 x좌표가 될 경우의 수 전부 알맞은 변수에 저장합니다.
  // lastIndexOf()는 하나의 배열 안에 #이 여러 개가 있을 때 마지막 x 좌표를 찾지 못할 경우를 대비했습니다.
  wallpaper.forEach((v, i) => {
     if(v.indexOf('#') > -1) {
         y_cases.push(i);
         x_cases.push(v.indexOf('#'));
     }
     if(v.lastIndexOf('#') > -1) {
         x_cases.push(v.lastIndexOf('#'));
     }
  });
  
  // x 좌표 중 중복되는 값을 Set을 활용해서 제거합니다.
  x_cases = new Set(x_cases);
  
  // 첫 드래그 자표와 마지막 드래그 좌표를 answer에 저장합니다.
  answer.push(Math.min(...y_cases));
  answer.push(Math.min(...x_cases));
  answer.push(Math.max(...y_cases) + 1);
  answer.push(Math.max(...x_cases) + 1);

  return answer;
}
  
  
  
  
  
/*  다른 사람의 풀이  */
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = []
  let bottom = [];
  
  // 배열에 저장된 문자열을 1개씩 #이라면 left(첫 번째 y좌표), top(첫 번째 x좌표), right(마지막 y좌표), bottom(마지막 x좌표)에 모든 경우의 수를 저장합니다.
  wallpaper.forEach((v,i) => {
    [...v].forEach((val,ind) => {
      if(val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  
  // 각각 Math.min()과 Math.max()를 활용해서 최종 좌표를 반환합니다.
  return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)];
}
