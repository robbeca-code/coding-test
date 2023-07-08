function solution(X, Y) {
  // 일치하는 값을 넣을 변수입니다.
  let answer = [];
  
  // 문자열은 배열로 변환하고 오름차순과 내림차순한 값을 저장하는 변수들입니다.
  let listX = X.split('').sort((a, b) => a - b);
  let listY = Y.split('').sort((a, b) => b - a);
  
  // 오름차순한 배열은 뒤에서부터, 내림차순한 배열은 앞에서부터 서로 비교하기 위한 변수입니다.
  let i = listX.length-1;
  let j = 0;
  
  // splice와 indexOf로 인한 시간초과를 배열의 비교만으로 일치하는 숫자를 찾기 위해 아래처럼 코드를 구현했습니다.
  while(i >= 0 && j !== listY.length) {
    // 서로 값이 같으면 answer에 해당 값을 넣고
    // 오름차순한 배열의 인덱스에는 -1을, 내림차순한 배열의 인덱스에는 +1을 해서 비교할 때 겹치지 않도록 합니다.
    if(listX[i]*1 === listY[j]*1) {
      answer.push(listX[i]);
      i -= 1;
      j += 1;
    }
    // listX가 더 값이 크면 오름차순 정렬이 되어있기 때문에 인덱스에 -1을 해줍니다.
    else if(listX[i]*1 > listY[j]*1) {
      i -= 1;
    }
    // listY가 더 크면 내림차순 정렬이 되어있기 때문에 인덱스에 +1을 해줍니다.
    else if(listX[i]*1 < listY[j]*1) {
      j += 1;
    }
  }

  // answer에 값이 들어있을 때, 첫 시작이 0이라면 '0'을 반환합니다.
  if(answer.length > 0 && answer[0] === '0') {
    return '0';
  }
  // answer에 값이 들어있을 때, 첫 시작이 0이 아니라면 answer을 내림차순해서 가장 큰 수가 될 수 있게 만들고 문자열로 변환합니다.
  else if(answer.length > 0 && answer[0] !== '0') {
    return answer.sort((a, b) => b - a).join('');
  }
  // 만약 answer에 값이 들어있지 않다면 -1 반환합니다.
  else {
    return '-1';
  }
}
