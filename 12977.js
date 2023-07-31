function solution(nums) {
  // 정답을 저장할 변수입니다.
  let answer = 0;
  // nums에서 소수 3개를 선택할 때 start를 기준으로 순차적으로 선택합니다.
  let start = nums[0];
  // start의 값을 변경하기 위한 인덱스 변수입니다.
  let h = 0;
  // 두 번째로 선택될 값을 변경하기 위한 인덱스 변수입니다.
  let i = 1;
  // 세 번째로 선택될 값을 변경하기 위한 인덱스 변수입니다.
  let j = 2;
  
  // 소수인지 확인하는 함수입니다.
  const result = (num1, num2, num3) => {
      const sum = num1 + num2 + num3;
      
      if(isNaN(sum)) {
          return 0;
      } else {
          for(let i=2; i<=sum; i++) {
              // 자신을 제외하고 나눴을 때 나머지가 0이 되면 소수가 아니란 의미로 0을 반환합니다.
              if(i !== sum && sum % i === 0) {
                  return 0;
                  break;
              } else if(i === sum){
                  return 1;
              }
          }
      }
  };

  // nums는 최소 3개 이상으로 이루어진 배열이기 때문에 최소 1번은 실행되어야 하기에 이렇게 작성했습니다.
  answer += result(start, nums[i], nums[j]);
  
  if(nums.length > 3) {
    // 1번째 while문은 start 뒤에 값이 2개가 있는 경우 실행되는 반복문입니다. 내부에 있는 반복문이 다 실행되면 start와 h, i, j 다 초기화 합니다.
    // 2번째 while문은 두 번째로 더해지는 값 뒤에 1개의 값이 존재하는 경우 실행되는 반복문입니다. 내부에 있는 반복문이 다 실행되면 i와 j를 초기화합니다.
    // 3번째 while문은 세 번째로 더해지는 값이기에 해당 값이 존재하는 경우 실행되는 반복문입니다. j에 1씩 값을 더해서 반복문을 실행합니다.
    while(nums[h+2] !== undefined) {
      while(nums[i+1] !== undefined) {
        while(nums[j] !== undefined) {
          j += 1;
          answer += result(start, nums[i], nums[j]);
        }
        i += 1;
        j = i;
      }
      h += 1;
      start = nums[h];
      i = h + 1;
      j = i;
    }
  }

  // 소수의 개수가 저장된 answer을 정답으로 반환합니다.
  return answer;
}
