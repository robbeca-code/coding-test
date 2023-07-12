function solution(s) {
  //나눠진 문자열의 개수를 저장할 변수입니다.
  let answer = 0;
  
  // 첫글자로 지정된 문자와 동일한 문자의 개수를 저장하는 변수와,
  // 첫글자와 동일하지 않은 문자의 개수를 저장하는 변수입니다.
  let xCount = 1;
  let dCount = 0;
  
  // s의 인덱스를 조정하기 위한 변수입니다.
  let i = 0;
  
  // 첫글자를 저장하는 변수입니다.
  let start = s[0];
  
  while(true) {
    // 첫글자와 같으면 xCount + 1, 다르면 dCount + 1을 하고
    // i에 +1을 해서 다음 문자를 비교할 수 있도록 했습니다.
    if(start === s[i+1]) {
      xCount += 1;
      i += 1;
    } else {
      dCount += 1;
      i += 1;
    }

    // xCount와 dCount가 동일해졌다면 문자열이 나눠졌다는 의미이므로 answer에 + 1을 하고
    // xCount와 dCount는 초기화 해주고, i에는 +1을 해서 다음 문자로 이동하게 만듭니다.
    // start에도 값을 수정합니다.
    if(xCount === dCount) {
      answer += 1;
      xCount = 1;
      dCount = 0;
      i += 1;
      start = s[i];
    }

    // 더이상 읽어올 문자가 없을 때 만약 xCount와 dCount가 기존의 값보다 클 때 answer에 +1을 하고 반복문을 종료합니다.
    if(s[i] === undefined) {
      if(xCount > 1 || dCount > 0) {
        answer += 1;
      }
      break;
    }
  }

  // 최종적으로 나눠진 문자열의 개수를 반환합니다.
  return answer;
}
