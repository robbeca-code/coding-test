function solution(order) {
  order = `${order}`;
  let answer = 0;
  
  // for...of를 사용해서 order 안에 있는 값을 1개씩 v에 넘겨서 해당 값이 3 or 6 or 9 라면 answer에 1씩 더하는 반복문입니다.
  for(let v of order) v === '3' || v === '6' || v === '9' ? answer += 1 : null;
  
  return answer;
}




/*  다른 사람의 풀이  */
function solution(order) {
  
  // order을 문자열로 변환하고
  // //는 정규 표현식을 의미합니다. [369]는 3 또는 6 또는 9인 정규표현식입니다.
  // 그래서 3 또는 6 또는 9로 문자열을 나눠서 배열로 변환하고 마지막엔 항상 빈 배열이 들어가있기 때문에
  // length - 1을 해야 369에서 박수를 친 횟수를 구할 수 있습니다.
  return (''+order).split(/[369]/).length-1;
}
