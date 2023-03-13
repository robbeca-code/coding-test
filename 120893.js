function solution(my_string) {
  let answer = Array.from(my_string);

  // forEach를 사용해서 answer의 값을 1개씩 꺼내서 해당 문자가 대문자인지 소문자인지를 확인하고
  // 대문자를 소문자로, 소문자를 대문자로 변환합니다.
  answer.forEach((item, i) => {
    if(item === item.toUpperCase()) {
      answer[i] = item.toLowerCase();
      return;
    }
    else if(item === item.toLowerCase()) {
      answer[i] = item.toUpperCase();
      return;
    }
  });

  // 배열을 문자열로 변환하기 위해 join('')을 사용했습니다.
  return answer.join('');
}




/*  다른 사람의 풀이  */
function solution(my_string) {
  let answer = '';
  
  // for..of를 사용해서 배열을 만들지 않고 문자열 1개씩 출력해서 해당 문자가 대문자인지 소문자인지를 확인하는 코드를 만들었습니다.
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
