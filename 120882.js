function solution(score) {
  // score의 길이만큼 등수 배열을 만듭니다.
  let answer = Array(score.length).fill(1);

  let avg = [];
  
  // 영어와 수학의 평균을 구해서 avg에 삽입합니다.
  avg = score.map((v) => {
    return (v[0] + v[1]) / 2;
  });

  // 평균을 비교하면서 더 큰 값에 1을 더해서 등수를 구합니다.
  // 이때 1등이 3명이면 다음 평균의 등수는 4등이 됩니다.
  for(let i=0; i<avg.length; i++) {
    for(let j=0; j<avg.length; j++) {
      if(avg[i] > avg[j]) answer[j]++;
    }
  }

  return answer;
}




/*  다른 사람의 풀이  */
function solution(score) {
  // 영어와 수학 점수의 평균을 구합니다.
  let avg = score.map(v=>(v[0]+v[1])/2);
  
  // 평균 점수를 내림차순으로 정렬합니다.
  let sorted = avg.slice().sort((a,b)=>b-a);
  
  // 인덱스는 0부터 시작하기 때문에 등수에 맞게 1씩 더해줘서 구합니다.
  // indexOf는 맨 처음값의 인덱스만 반환하기 때문에 1등이 3명이면 그 다음 사람은 4등이 됩니다.
  return avg.map(v=>sorted.indexOf(v)+1);
}
