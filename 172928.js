function solution(park, routes) {
  let answer = [0, 0];
  
  // park의 최대 높이와 최대 너비를 저장해서 routes로 좌표를 이동할 때 오류 발생을 막기 위해 정의합니다.
  const maxH = park.length;
  const maxW = park[0].length;

  //
  // park의 시작 지점을 찾습니다.
  park.forEach((v, i) => {
    const findS = v.indexOf('S');
    if(findS != -1) {
      answer[0] = i;
      answer[1] = findS;
    }
  });

  //
  // routes의 방향과 이동수에 맞게 answer에 좌표를 저장하는 코드를 구현합니다.
  for(let v of routes) {
    const n = v[2]*1;
    let moveNum = 0;
    //
    // 1번째 if문에는 방향만큼 이동하다 park를 넘지 않았을 때만 좌표를 이동해서 해당 값을 찾을 수 있도록 합니다.
    // 1번째 if문의 else문은 방향에 맞게 이동하다 park를 넘었을 때 이동수는 0으로 초기화하고 for문을 중단합니다.
    // 2번째 if문은 park에서 해당 좌표에 값이 X가 아닐 때 즉, O이거나 S라면 이동한 수 만큼 moveNum에 저장하고 반복문을 이어서 실행합니다.
    // 2번째 if문의 else문은 만약 park에서 해당 좌표의 값이 X라면 moveNum을 0으로 초기화하고 for문은 중단합니다.
    switch(v[0]) {
      case 'E':
        for(let i=1; i<=n; i++) {
          // 1번째 if문
          if(answer[1] + i < maxW) {
            // 2번째 if문
            if(park[answer[0]][answer[1] + i] != 'X') {
                moveNum += 1;
              // 2번째 if문의 else
            } else {
                moveNum = 0;
                break;
            }
            // 1번째 if문의 else문
          } else {
            moveNum = 0;
            break;
          }
        }

        answer[1] += moveNum;
        break;

      case 'W':
        for(let i=1; i<=n; i++) {
          if(answer[1] - i >= 0) {
            if(park[answer[0]][answer[1] - i] != 'X') {
                moveNum += 1;
            } else {
                moveNum = 0;
                break;
            }
          } else {
            moveNum = 0;
            break;
          }
        }

        answer[1] -= moveNum;
        break;

      case 'S':
        for(let i=1; i<=n; i++) {
          if(answer[0] + i < maxH) {
            if(park[answer[0] + i][answer[1]] != 'X') {
                moveNum += 1;
            } else {
                moveNum = 0;
                break;
            }
          } 
          else {
            moveNum = 0;
            break;
          }
        }

        answer[0] += moveNum;
        break;

      case 'N':
        for(let i=1; i<=n; i++) {
          if(answer[0] - i >= 0) {
            if(park[answer[0] - i][answer[1]] != 'X') {
              moveNum += 1;
            } else {
              moveNum = 0;
              break;
            }
          }
          else {
            moveNum = 0;
            break;
          }
        }

        answer[0] -= moveNum;
        break;
    }
  }

  // 로봇 강아지가 이동한 최종 좌표를 반환합니다.
  return answer
}
//
//
//
//
/*  다른 사람의 풀이  */
function solution(park, routes) {
  // 방향에 따라 이동하는 좌표를 정의합니다.
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  //
  // park에서 시작지점을 찾아 x, y에 저장합니다.
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      [x, y] = [i, park[i].indexOf('S')];
      break;
    }
  }
  //
  // while문은 이동 거리만큼 반복합니다.
  // nx와 ny에는 dirs에서 미리 정의된 방향에 맞게 거리를 더합니다.
  // if문에서 첫 번째 조건문은 park의 높이를 벗어났을 때를 의미하고, 두 번째는 park의 너비를 벗어났을 때, 세 번째는 해당 좌표만큼 이동했을 때 park의 값이 X일 때 반복문을 중단하게됩니다.
  // 만약 해당 if문에 적합하지 않는다면 cnt에는 1씩 더합니다.
  // 최종적으로 cnt과 n이 같아졌을 때 이동한 거리만큼 좌표를 더했던 [nx, ny]를 [x, y]에 저장합니다.
  routes.forEach((route) => {
    const [r, n] = route.split(' ');
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
      cnt++;
    }
    
    if (cnt == n) [x, y] = [nx, ny];
  });
  
  // 최종 좌표를 반환합니다.
  return [x, y];
}
