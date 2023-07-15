function solution(s, skip, index) {
  // 암호에 해당되는 문자를 저장하는 변수입니다.
  let answer = '';
  
  for(let v of s) {
    // 문자의 아스키 코드를 저장하는 변수입니다.
    let v_ascii = v.charCodeAt(0);
    // 문자들을 저장하는 변수입니다.
    let chars = [];

    // index와 chars의 개수가 같지 않다면 chars에 겹치는 문자가 생겼다는 의미로 다시 반복하고,
    // index와 chars의 개수가 같으면 더이상 겹치는 문자가 없기 때문에 반복문을 종료합니다.
    while(index !== chars.length) {
      // 처음에는 chars의 길이가 0이므로 index만큼 반복하고, chars에 문자가 들어갔을 땐 겹친 문자가 빠진만큼만 다시 반복합니다.
      for(let i=0; i<index-chars.length; i++) {
        v_ascii += 1;

        // 소문자 알파벳 아스키 코드의 최대값이 122이므로 123이 되면 97('a')로 초기화합니다.
        if(v_ascii === 123) {
          v_ascii = 97;
          chars.push(String.fromCodePoint(v_ascii));
        } else {
          chars.push(String.fromCodePoint(v_ascii));
        }
      }

      // skip(제외되는 문자들)에 있지 않은 문자만 chars에 저장합니다.
      chars = chars.filter(word => skip.indexOf(word) === -1);
    }

    // index만큼 뒤에 있는 알파벳을 가져와야하기 때문에 v_ascii를 문자로 변환한 뒤 answer에 저장합니다.
    answer = answer.concat(String.fromCodePoint(v_ascii));
  }

  // 최종적으로 만들어진 암호를 반환합니다.
  return answer;
}
