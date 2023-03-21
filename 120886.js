function solution(before, after) {
  let answer = 0;
  let arr_after = [...after];
  
  // before을 배열로 변환 후 forEach를 활용해서 after 안에 해당 값이 있다면
  // after에 해당 값을 삭제하면서 before와 after이 동일한 문자들을 가졌는지 확인합니다.
  [...before].forEach(v => {
    if(arr_after.indexOf(v) !== -1) {
      arr_after.splice(arr_after.indexOf(v), 1);
      answer += 1;
    }
  });
  
  // 최종적으로 answer의 개수가 before의 길이와 동일하다면 1을 반환하고 아니라면 0을 반환합니다.
  return answer === before.length ? 1 : 0;
}




/*  다른 사람의 풀이  */
function solution(before, after) {
  // before와 after을 배열로 만들고 정렬을 하고 다시 문자열로 변환했을 때 해당 값이 같으면 1을, 다르면 0을 반환합니다.
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}
