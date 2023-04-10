function solution(my_string) {
  // 문자열을 배열로 변환한 뒤, Number()로 데이터타입을 변환했을 때 자연수인 것만 숫자로 변환하고 반환합니다.
  my_string = my_string.split('').map(v => {
    if(Number(v) >= 0) {
      return Number(v);
    }
  });

  // 오름차순 정렬을 하고,
  // map을 사용해서 조건문에 맞지 않은 값은 null로 반환이 되기 때문에
  // filter()을 사용해서 null이 아닌 것만 골라 새로운 배열로 반환합니다.
  return my_string.sort((a, b) => a - b).filter(v => v != null);
}
