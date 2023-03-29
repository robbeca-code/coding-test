function solution(spell, dic) {
  let answer = [];
  let result = [];
  let same_length = '';

  // word라는 문자열에서 spell의 문자들이 있는지 확인하기 위한 함수입니다.
  function findSameWord(word) {
    for(let i=0; i<spell.length; i++) {
      if(word.includes(spell[i])) {
        result.push(1);
      }
      else {
        result.push(0);
      }
    }
  }

  // spell과 길이가 동일한 문자열만 모아서 저장합니다.
  same_length = dic.filter(v => v.length === spell.length);

  for (const v of same_length) {
    findSameWord(v);
  }

  // 전체 값이 1인 배열을 찾기 위해서 spell의 길이만큼 result를 잘랐습니다.
  while(result.length > 0) {
    answer.push(result.splice(0, spell.length));
  }

  // 0이 없다면 spell과 일치하는 문자열이기 때문에 1을 반환하고 그렇지 않으면 2를 반환합니다.
  return answer.filter(v => v.indexOf(0) === -1).length > 0 ? 1 : 2;
}





/*  다른 사람의 풀이  */
function solution(p, d) {
  // some()은 조건문에 참이 하나라도 있다면 true를 반환하는 메서드입니다.
  // some()을 사용해서 p를 정렬한 문자열과 s라는 문자를 비교했을 때 똑같다면 true 다르다면 false를 반환합니다.
  return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
