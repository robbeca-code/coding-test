function solution(survey, choices) {
  let answer = '';
  // 선택지 점수를 저장한 변수입니다.
  const score = {
    1: 3, 2: 2, 3: 1,
    4: 0,
    5: 1, 6: 2, 7: 3
  };
  // 검사자의 선택지 점수를 유형에 맞게 저장하기 위한 변수입니다.
  let survey_score = {
    'R': 0, 'T': 0,
    'C': 0, 'F': 0,
    'J': 0, 'M': 0,
    'A': 0, 'N': 0
  };

  // 3보다 같거나 작으면 비동의에 속하기에 survey[i]의 첫 번째 유형에 점수가 저장됩니다.
  // 5보다 같거나 크면 동의에 속하므로 survey[i]의 두 번째 유형에 점수가 저장됩니다.
  // 만약 0이라면 점수가 없기에 survey[i]에 있는 두 유형에 0을 저장하게 됩니다.
  choices.forEach((v, i) => {
    if(v <= 3) {
      survey_score[survey[i][0]] += score[v];
    } else if(v >= 5) {
      survey_score[survey[i][1]] += score[v];
    } else {
      survey_score[survey[i][0]] += score[v];
      survey_score[survey[i][1]] += score[v];
    }
  });

  // 각 지표마다 두 개의 유형 중 크기가 큰 유형이 검사자의 성격 유형이 됩니다.
  // 만약 점수가 같다면 사전 순으로 더 빠른 유형이 검사자의 성격 유형이 됩니다. 이는 아스키 코드로 구분하였습니다.
  const result = (score1, score2, kind1, kind2) => {
    if(score1 > score2) {
      answer = answer.concat(kind1);
    } else if(score1 < score2) {
      answer = answer.concat(kind2);
    } else {
      const kind1_ascii = kind1.charCodeAt(0);
      const kind2_ascii = kind2.charCodeAt(0);
      
      if(kind1_ascii < kind2_ascii) {
        answer = answer.concat(kind1);
      } else {
        answer = answer.concat(kind2);
      }
    }
  };
  
  result(survey_score['R'], survey_score['T'], 'R', 'T');
  result(survey_score['C'], survey_score['F'], 'C', 'F');
  result(survey_score['J'], survey_score['M'], 'J', 'M');
  result(survey_score['A'], survey_score['N'], 'A', 'N');
  
  return answer;
}
