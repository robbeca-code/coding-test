function solution(ingredient) {
  // 만든 햄버거 개수를 저장할 변수입니다.
  let answer = 0;
  
  // 식재료를 저장할 변수입니다.
  let stack = [];
  
  // stack에 식재료를 1개씩 추가합니다.
  // 식재료 순서대로 햄버거를 만들어야 하기 때문에
  // 마지막에 들어온 데이터를 기준으로 해당 stack에 햄버거를 만들 수 있는 식재료가 있는지 확인합니다.
  // 햄버거를 만들 수 있다면, 사용한 식재료는 즉시 stack에서 삭제하고
  // answer에 1을 추가합니다.
  ingredient.forEach(v => {
    stack.push(v);
    const stack_length = stack.length;
    if(stack[stack_length - 4] === 1 && stack[stack_length - 3] === 2 && stack[stack_length - 2] === 3 && stack[stack_length - 1] === 1) {
      for(let i=0; i<4; i++) {
        stack.pop();   
      }
      answer++;
    }
  });
  
  return answer;
}
