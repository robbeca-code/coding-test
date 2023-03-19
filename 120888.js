function solution(my_string) {
  // Set을 이용해서 중복된 문자를 제거한 뒤
  // join('')을 사용하기위해 배열로 변환해서 문자열로 반환합니다.
  return Array.from(new Set(my_string)).join('');
}



/*  다른 사람의 풀이  */
// indexOf로 중복된 문자가 아닌 것들만 새로운 배열로 만들어서 문자열로 변환한 뒤 반환합니다.
var solution=s=>[...s].filter((c,i)=>s.indexOf(c)==i).join('')
