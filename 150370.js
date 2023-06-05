function solution(today, terms, privacies) {
  let answer = [0];
  let termMap = new Map();
  let termsType = '';
  let month = 0;
  let year = 0;
  let day = 0;
  
  // privacies와 today, terms 안에서 같은 정보끼리 묶어서 배열로 새롭게 저장합니다.
  today = today.split('.');

  terms.forEach(term => {
    term_split = term.split(' ');
    termMap.set(term_split[0], term_split[1]*1);
  });
  
  privacies.forEach((v, i) => {
    v_split = v.split(' ');
    v_split[0] = v_split[0].split('.');
    
    year = v_split[0][0]*1;
    month = v_split[0][1]*1;
    day = v_split[0][2]*1;
    termsType = v_split[1];
    
    // termMap에서 privacies에서 유효기간 타입에 맞는 유효기간을 반환하도록 합니다.
    let termDate = termMap.get(termsType);
    
    // 유효기간이 12를 넘어가면 연도는 12로 나눈 몫만큼 더해져야 하고,
    // 월은 1년이 12개월이므로 addYear*12를 하고, 유효기간만큼 빼줘야 월을 얼만큼 더해야 하는지 구할 수 있습니다.
    let addYear = Math.floor(termDate / 12);
    let addMonth = termDate - addYear * 12;
    
    // 최종적으로 월이 12를 넘으면 연도에 1을 더하고, 월에는 더한 만큼 12를 빼줍니다.
    // 만약 그렇지 않으면 연도와 월에 더할 값을 각각 더해줍니다.
    if(addMonth + month > 12) {
      year = year + addYear + 1;
      month = addMonth + month - 12;
    } else {
      year += addYear;
      month += addMonth;
    }
    
    // day에서 1을 뺐을 때 0이 되면 월에서 1을 빼야 합니다.
    // 이때 day-1이 0이면서 month가 1인 경우와 그렇지 않은 경우에 맞게 연도와 월, 일을 구해줍니다.
    if(day - 1 === 0 && month === 1) {
      year -= 1;
      month = 12;
      day = 28;
    } else if(day - 1 === 0) {
      month -= 1;
      day = 28;
    } else {
      day -= 1;
    }
    
    // 유효기간을 넘었을 경우 answer에 값을 넣어줍니다.
    if(year < today[0]*1) {
      answer.push(i+1);
    } else if(year === today[0]*1 && month < today[1]*1) {
      answer.push(i+1);
    } else if(year === today[0]*1 && month === today[1]*1 && day < today[2]*1) {
      answer.push(i+1);
    }
  });
  
  // answer에서 맨 앞에 0을 제거해서 올바른 답을 반환해주도록 하는 코드입니다.
  return answer.splice(1, answer.length - 1);
}
