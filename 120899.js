function solution(array) {
  // Math.max에 배열을 전개 연산자를 활용해서 가장 큰 값을 찾습니다.
  let maxNumber = Math.max(...array);
  
  // indexOf() 메서드로 인자로 넘겨받은 값의 첫 번째 인덱스를 반환해줍니다.
  let maxIndex = array.indexOf(maxNumber);

  // 마지막으로 가장 큰 값과 해당 값의 인덱스를 return 합니다.
  return [maxNumber, maxIndex];
}
