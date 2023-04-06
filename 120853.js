function solution(s) {
  let answer = 0;
  
  // 빈칸을 기준으로 새로운 배열로 변환합니다.
  s = s.split(' ');

  // 초기값을 0으로 둬서 i(현재 인덱스)를 사용할 때 0부터 시작할 수 있도록 했습니다.
  // c는 현재 값으로 만약 Z일 때 Z 앞에 있는 숫자를 뺍니다.
  // 그게 아니라면 a(누적값)와 c(현재 값)를 더합니다.
  answer = s.reduce((a, c, i) => {
    if(c === 'Z') return Number(a) - Number(s[i-1]);
    else return Number(a) + Number(c);
  }, 0);

  return answer;
}




/*  다른 사람의 풀이  */
function solution(s) {
  const stack = []

  // s에 저장된 수를 순서대로 더하다가
  // target이 Z일 때 Z 앞에 있는 수를 그대로 빼는 거라서 stack에서 pop()해서 빼버립니다.
  s.split(' ').forEach((target) => {
    if(target === 'Z') stack.pop();
    else stack.push(+target);
  })

  // Z 앞에 있는 숫자를 다 뺐기 때문에 stack에 저장된 숫자를 그대로 더하면 됩니다.
  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
