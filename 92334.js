function solution(id_list, report, k) {
  // 정답을 저장할 변수입니다. id_list 개수에 맞춰서 0으로 초기화합니다.
  let answer = new Array(id_list.length).fill(0);
  // report에서 중복된 값을 제거합니다.
  report = [...new Set(report)];
  // report_list는 본인이 신고한 사람의 정지 여부를 저장하는 변수이고, target_list는 본인이 신고받은 횟수를 저장하는 변수입니다.
  let report_list = {};
  let target_list = {};

  // report_list와 target_list를 초기화합니다.
  id_list.forEach(id => {
    report_list[id] = [];
    target_list[id] = 0;
  });

  // 본인이 신고받은 횟수만큼 1을 더합니다.
  report.forEach(info => {
    target_list[info.split(' ')[1]] += 1;
  });

  // k개 이상 신고받은 사용자는 정지되므로 이것을 기준으로 report_list에 값(t: true)을 저장합니다.
  report.forEach(info => {
    const [id, target] = info.split(' ');
    
    if(target_list[target] >= k) {
      report_list[id].push('t');
    }
  });

  answer에는 본인이 신고한 대상 중 몇 명이 정지가 되었는지를 저장합니다.
  id_list.forEach((id, idx) => {
    answer[idx] += report_list[id].length;
  });
  
  return answer;
}
