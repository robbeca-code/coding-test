function solution(numbers) {
  let str_list = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  // numbers에서 str_list와 일치하는게 있다면 그것을 split을 사용해서 제거하고
  // join()에 해당 index를 넣어서 남은 문자열과 제거된 문자열에 맞는 숫자값으로 다시 문자열을 만들어서 반환합니다.
  str_list.forEach((item, idx) => {
    numbers = numbers.split(item).join(idx);
  });

  // 숫자로 된 문자열을 숫자 형태로 변환하기 위해 Number을 사용했습니다.
  return Number(numbers);
}



/*  다른 사람의 풀이  */
function solution(numbers) {
  let numStr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

  // replaceAll을 사용해서 str과 일치하는 모든 문자열을 idx 인덱스로 변환해서 숫자 문자열에 맞는 값을 찾을 수 있습니다.
  numStr.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  
  return Number(numbers);
}
