function solution(keyinput, board) {
  let answer = [];
  let x = 0;
  let y = 0;
  
  // x, y 좌표에서 움직일 수 있는 최대값을 저장했습니다.
  let [x_limit, y_limit] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  // key값에 맞게 움직이는데 이때 좌표에서 움직일 수 있는 최대값을 넘으면 상황에 맞게 -1 또는 +1을 합니다.
  keyinput.forEach(v => {
    // up은 y에 +1을 해주기 때문에 만약 최대값을 넘기면 최대값으로 유지하기 위해 -1을 해줍니다.
    if(v === 'up') {
      y++;
      if(Math.abs(y) > y_limit) y--;
    }
    
    // up의 구조와 동일하게 구현되었습니다.
    else if(v === 'down') {
      y--;
      if(Math.abs(y) > y_limit) y++;
    }
    else if(v === 'left') {
      x--;
      if(Math.abs(x) > x_limit) x++;
    }
    else if(v === 'right') {
      x++;
      if(Math.abs(x) > x_limit) x--;
    }
  });

  answer.push(x);
  answer.push(y);

  return answer;
}
