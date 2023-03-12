function solution(my_str, n) {
  let answer = [];
  
  // n 크기만큼 my_str을 나눴을 때 만들어지는 배열의 길이
  let arr_length = my_str.length / n;

  // for문이 진행될 때마다 맞게 문자열을 나눠서 anwer에 삽입합니다.
  for(let i=0; i<arr_length; i++) {
    answer.push(my_str.slice(i*n, n*(i+1)));
  }

  return answer;
}
