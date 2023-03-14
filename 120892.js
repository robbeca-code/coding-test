function solution(cipher, code) {
  let answer = '';
  
  // cipher의 인덱스를 code 값으로 나눴을 때 나머지가 0이면 code의 배수값이므로 answer에 삽입합니다.
  // i가 문자열이므로 *1을 해줘서 숫자 형태로 변환했습니다.
  for(let i in cipher) (i*1+1) % code === 0 ? answer += cipher[i] : null;
  
  return answer;
}



/*  다른 사람의 풀이  */
function solution(cipher, code) {
  var answer = "";
  
  // 시작을 code - 1로 해서 code의 첫 번째 배수에서 시작하고,
  // i에 code값만큼 더해서 code의 배수값을 찾는 반복문입니다.
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
