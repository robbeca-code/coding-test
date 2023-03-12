function solution(my_string, num1, num2) {
  let keyword1 = my_string[num1];
  let keyword2 = my_string[num2];
  
  // 문자열을 1개씩 나눠서 배열을 만듭니다.
  let my_array = my_string.split('');

  // 각각 인덱스에 맞는 키워드를 배치해서 서로 인덱스에 맞는 문자열을 교체한 것과 같은 변화를 줍니다.
  my_array[num1] = keyword2;
  my_array[num2] = keyword1;

  // join('')을 사용해서 문자열로 변환한 뒤 반홥합니다.
  return my_array.join('')
}




/*  다른 사람의 풀이  */
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}
