function solution(my_string) {
  let answer = 0;
  
  // my_string 안에 있는 숫자만 남기기 위해 영문자로 split 합니다.
  my_string = my_string.split(/[a-z|A-Z]/);

  // my_string에서 숫자인 것만 골라서 answer에 더합니다.
  for(let v of my_string) {
    if((v*1) > 0) {
      answer += (v*1);
    }
  }

  // 더한 값을 저장한 answer을 반환합니다.
  return answer;
}
