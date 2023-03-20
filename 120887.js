function solution(i, j, k) {
  let answer = '';

  // i를 문자열로 변환하고 해당 문자열에 k가 있을 때 answer에 해당 문자를 추가했습니다.
  for(let a = i; a < j+1; a++) {
    if(a.toString().indexOf(k) != -1) {
      answer += a;
    }
  }

  // 배열로 변환한 뒤, 각각의 값 안에 k와 동일한 것만 골라서 길이를 반환합니다.
  return [...answer].filter(v => v === `${k}`).length;
}





/*  다른 사람의 풀이  */
function solution(i, j, k) {
  let a ='';
  
  // i부터 j까지 수를 a에 삽입합니다.
  for(i;i<=j;i++){
      a += i;
  }

  // a를 k를 기준으로 나눠서 배열로 변환하고, 항상 k의 개수보다 1씩 크기 때문에 -1을 하고 길이를 반환합니다.
  return a.split(k).length-1;
}
