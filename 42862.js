function solution(n, lost, reserve) {
  // 체육복을 가지고 있는 학생수를 저장할 변수입니다.
  let answer = 0;
  // reserve와 lost를 수정한 값을 저장할 변수입니다.
  let reserve2 = [];
  let lost2 = [];
  
  // reserve와 lost 각각 겹치는 학생을 제거하고 서로 동일한 정렬을 수행합니다.
  reserve2 = reserve.filter(student => lost.indexOf(student) === -1).sort((a, b) => a - b);
  lost2 = lost.filter(student => reserve.indexOf(student) === -1).sort((a, b) => a - b);
  
  // answer 초기화 합니다.(체육복 있는 애들만 값을 넣습니다.)
  answer = n - lost2.length;
  
  // reserve2에서 -1, +1만큼 차이나는 학생이 lost2에 있으면 체육복을 빌려줍니다.
  // lost2에서 체육복을 빌려받은 학생은 겹치는 경우를 제거하기 위해서 splice를 활용했습니다.
  reserve2.forEach(student => {
    if(lost2.indexOf(student - 1) !== -1) {
      lost2.splice(lost2.indexOf(student - 1), 1);
      answer += 1;
    } else if(lost2.indexOf(student + 1) !== -1) {
      lost2.splice(lost2.indexOf(student + 1), 1);
      answer += 1;
    }
  });
  
  return answer;
}
  
  
  
/*  다른 사람의 풀이  */
function solution(n, lost, reserve) {
  // 체육북을 빌려줄 수 있는 학생은 reserve의 값에서 -1, 0, +1만큼 차이나는 학생들이기 때문에
  // lost에서 reserve 값과 뺀 후 0 또는 1이 되지 않는 학생만 남겨서 n(총 학생수)와 빼 결과를 출력합니다.
  return n - lost.filter(a => {
    const b = reserve.find(r => Math.abs(r-a) <= 1)
    if(!b) return true
    reserve = reserve.filter(r => r !== b)
  }).length
}
  
// 느낀점: 최종적으로 어떤 규칙에 의한 값들만 저장되는 문제이기 때문에 그걸 기준으로 값을 분리하면 된다는 것을 배웠습니다.
