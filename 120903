function solution(s1, s2) {
  // s1과 s2 배열을 합친 후, Set을 활용해서 중복되는 값을 제거한 뒤
  let s3 = s1.concat(s2);
  let set_s3 = new Set(s3);
  
  // 원본과 중복되는 값을 제거한 것의 길이를 비교해서 중복되는 문자의 개수를 확인합니다.
  return s3.length - set_s3.size;
}


/* 다른 사람의 풀이 */
function solution(s1, s2) {
  // filter와 includes를 사용해서 중복되는 값만으로 새로운 배열을 완성한 후, 길이를 반환해서 중복되는 문자의 개수를 확인할 수 있습니다.
  return s1.filter((v) => s2.includes(v)).length;
}
