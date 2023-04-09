function solution(my_string) {
  // 문자열을 배열로 변환하고, 1보다 큰 자연수들만으로 새로운 배열로 반환합니다.
  my_string = my_string.split('').filter(v => Number(v) >= 1);

  // 자연수를 더한 값을 반환합니다.
  return my_string.reduce((a, c) => {
    return a + Number(c);
  }, 0);
}





/*  다른 사람의 풀이  */
function solution(my_string) {
  
  // 문자열을 배열로 변환한 뒤, 해당 값이 숫자라면 더하고 아니라면 합계를 저장하고 있는 변수를 반환합니다.
  return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
}
