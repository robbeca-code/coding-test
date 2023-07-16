function solution(k, score) {
  // 명예의 전당에서 최하위 점수를 저장할 변수입니다.
  let answer = [];

  // k개 만큼 score에서 큰 점수들을 저장할 변수입니다.
  let kScore = [];
  
  score.forEach(v => {
    kScore.push(v);

    // kScore k보다 작거나 같을 때까진 가장 작은 수만 찾아서 answer에 추가합니다.
    // 만약 kScore의 길이가 k보다 커지면 k개 만큼만 점수를 저장해야 하기 때문에 가장 작은 수를 빼낸 다음,
    // 남아있는 점수 중에서 작은 점수를 골라 answer에 저장합니다.
    if(kScore.length <= k) {
      answer.push(Math.min(...kScore));
    } else {
      let minV = Math.min(...kScore);
      kScore.splice(kScore.indexOf(minV), 1);
      answer.push(Math.min(...kScore));
    }
  });
  
  return answer;
}
