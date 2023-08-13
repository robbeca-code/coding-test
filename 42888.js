function solution(record) {
  let answer = [];
  // 사용자의 닉네임을 저장하는 변수입니다.
  let user_nickname = {};
  
  record.forEach(message => {
    const [method, id, nickname] = message.split(' ');

    // Leave일 때는 사용자의 닉네임이 나오지 않기에 조건문에서 제외하였고, id가 같은데 닉네임이 달라졌을 때 변경된 닉네임으로 저장합니다.
    if(method !== 'Leave' && user_nickname[id] !== nickname) {
      user_nickname[id] = nickname;
    }
  });
  
  record.forEach(message => {
    const [method, id] = message.split(' ');

    // 최종적으로 변경된 사용자의 닉네임이 들어간 카톡 메세지를 순서대로 배열에 저장합니다.
    switch(method) {
      case 'Enter':
        answer.push(user_nickname[id] + '님이 들어왔습니다.');
        break;
      case 'Leave':
        answer.push(user_nickname[id] + '님이 나갔습니다.');
        break;
    }
  });

  return answer;
}
