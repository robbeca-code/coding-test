function solution(s) {
  // 답을 저장할 변수입니다.
  let answer = [];
  // s의 값을 순차적으로 가져오기 위해 사용한 변수입니다. (인덱스 역할)
  let i = 0;

  while(true) {
    // 문자라면 알파벳의 첫글자가 오고, 숫자라면 숫자가 저장되는 변수입니다.
    let start = s[i];

    // start가 숫자라면 그대로 answer에 넣고
    // 문자라면 첫글자에 따라 알맞은 숫자를 answer에 넣고 문자 개수만큼 i를 증가시켜서 다음 것과 비교할 수 있도록 합니다.
    if(start >= 0) {
        answer.push(start);
        i += 1;
    } else {
      if(start === 'z') {
        answer.push(0);
        i += 4;
      } else if(start === 'o') {
        answer.push(1);
        i += 3;
      } else if(start === 'e') {
        answer.push(8);
        i += 5;
      } else if(start === 'n') {
        answer.push(9);
        i += 4;
      } else if(start === 'f') {
        start = s[i + 1];
        i += 1;
        
        if(start === 'o') {
          answer.push(4);
          i += 3;
        } else {
          answer.push(5);
          i += 3;
        }
      } else if(start === 's') {
        start = s[i + 1];
        i += 1;
        
        if(start === 'i') {
          answer.push(6);
          i += 2;
        } else {
          answer.push(7);
          i += 4;
        }
      } else if(start === 't') {
        start = s[i + 1];
        i += 1;
        
        if(start === 'w') {
          answer.push(2);
          i += 2;
        } else {
          answer.push(3);
          i += 4;
        }
      }
    }
    
    if(start === undefined) {
      break;
    }
  }

  // 숫자형으로 변환하기 위해 배열을 문자열로 바꾼 뒤 1을 곱해줍니다.
  return answer.join('') * 1;
}
