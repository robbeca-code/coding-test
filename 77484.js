function solution(lottos, win_nums) {
  // 정답을 저장할 변수입니다.
  let answer = [0, 0];
  // 0의 개수를 저장할 변수입니다.
  let zero_count = 0;
  // win_nums와 lottos에서 동일한 개수를 저장할 변수입니다.
  let count = 0;
  // lottos와 win_nums를 내림차순 정렬해서 동일한 값을 찾을 때 더 효율적으로 찾을 수 있도록 했습니다.
  lottos = lottos.sort((a, b) => b - a);
  win_nums = win_nums.sort((a, b) => b - a);

  // lottos에서 0을 찾아 zero_count에 값을 저장합니다.
  lottos.forEach(num => {
    if(num === 0) {
      zero_count += 1;
    }
  });

  // lottos에서 win_nums와 동일한 값을 찾은 경우 count에 1씩 더합니다.
  lottos.forEach(num => {
    for(let i=0; i<win_nums.length; i++) {
      if(num === win_nums[i]) {
        count += 1;
        break;
      }
    }
  });

  // 최소 순위와 최고 순위를 구하기 위한 함수입니다.
  const score = (result_count) => {
    switch(result_count) {
      case 0:
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
    }
  };

  // zero_count와 count를 더해서 최대 동일한 개수를 score에 전달해서 최고 순위를 answer[0]에 저장합니다.
  // count만 score에 전달해서 최소 순위를 answer[1]에 저장합니다.
  answer[0] = score(zero_count + count);
  answer[1] = score(count);
  
  return answer;
}

  
  
  
  
/*   다른 사람의 풀이   */
function solution(lottos, win_nums) {
  // wind_nums와 동일한 개수에 따라 순위를 저장한 변수입니다.
  const rank = [6, 6, 5, 4, 3, 2, 1];

  // lottos와 win_nums에서 동일한 개수를 저장한 변수와 0의 개수를 저장한 변수입니다.
  let minCount = lottos.filter(v => win_nums.includes(v)).length;
  let zeroCount = lottos.filter(v => !v).length;
  
  // minCount와 zeroCount를 더해서 동일한 개수를 최대로 만들어 저장합니다.
  const maxCount = minCount + zeroCount;

  // maxCount와 minCount에 맞는 순위를 가져오고 반환합니다.
  return [rank[maxCount], rank[minCount]];
}
