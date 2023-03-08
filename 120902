function solution(my_string) {
  // eval() 대신 사용한 (new Function("return "+ ...))() 입니다.
  // eval()와 동일한 역할을 합니다.
  return (new Function("return " + my_string))();
}



/*  다른 사람의 풀이  */
function solution(my_string) {
  // 문자열을 빈 공백으로 구분해서 배열을 만듭니다.
  const arr = my_string.split(' ').filter(e=>e);
  
  // 딱 1번만 반복합니다.
  // shift()를 활용해서 배열의 값을 순서대로 반환합니다.
  // +arr.shift()와 1*arr.shift()를 활용해서 문자열을 숫자로 변환합니다.
  // 계산한 값을 unshift()를 활용해서 첫 번째 인덱스에 삽입하고
  while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
  
  // 첫 번째 인덱스를 반환해서 문자열 수식의 값을 확인할 수 있습니다.
  return arr[0]
}
