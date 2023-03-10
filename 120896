function solution(s) {
  let answer = [];

  // 배열에만 사용할 수 있는 메서드를 사용하기 위해 s라는 문자열을 배열로 변환합니다.
  // s에 중복되는 문자가 있다면 indexOf()와 lastIndexOf()의 값이 동일하지 않기 때문에
  // filter의 조건문을 그 반대로 작성해서 중복되지 않는 값을 찾아서 반환했습니다.
  
  return [...s].filter(item => [...s].indexOf(item) === [...s].lastIndexOf(item)).sort().join('');
}
