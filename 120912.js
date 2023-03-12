function solution(array) {
  // 정규표현식을 사용하기 위해 배열의 각 값을 문자열로 바꿉니다.
  array.forEach((item, i) => array[i] = `${item}`);

  // 7이 1회 이상 반복될 때 해당하는 값만 반환, 없으면 null을 반환합니다.
  let regExp = /7+/g;
  
  let result = array.map(item => item.match(regExp));
  let answer = result.join('');

  // 7이 없으면 0이 반환되고, 7이 있으면 1 이상의 값이 반환됩니다.
  return answer.length;
}
