function solution(s) {
  let answer = [];
  // s의 각각 문자들의 인덱스를 저장할 변수입니다.
  let stack = {};
  let s_list = s.split('');

  // s의 문자들을 순차적으로 반복해서 가장 가까운 문자의 위치를 찾아냅니다.
  // 만약 stack에 문자가 있다면, 현재 문자의 인덱스와 해당 인덱스의 차를 answer에 저장하고 stack에서 해당 문자의 인덱스를 수정합니다.
  // 그러나 stack에서 문자를 찾지 못한다면 처음 나온 문자이므로 answer에 -1을 저장하고 stack에 해당 문자의 인덱스를 저장합니다.
  s_list.forEach((v, i) => {
    const idx = stack[v];
    
    if(idx !== undefined) {
      answer.push(i - idx);
    } else {
      answer.push(-1);
    }
    
    stack[v] = i;
  });
  
  return answer;
}
