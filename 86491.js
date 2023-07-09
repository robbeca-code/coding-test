function solution(sizes) {
  // 가로와 세로 각각을 저장하기 위한 변수들입니다.
  let list_w = [];
  let list_h = [];

  // 가로와 세로 중 가장 큰 수를 저장하기 위한 변수들입니다.
  let max_w = 0;
  let max_h = 0;

  // 모든 명함이 들어갈 수 있는 최소의 직사각형 지갑을 만들어야 하기 때문에
  // 가로와 세로를 비교해서 만약 가로보다 세로가 더 큰 명함은 뒤집어서 보관하기 위해 가로에 세로값을 세로에 가로값을 넣습니다.
  sizes.forEach(v => {
    if(v[0] < v[1]) {
      list_w.push(v[1]);
      list_h.push(v[0]);
    } else {
      list_w.push(v[0]);
      list_h.push(v[1]);
    }
  });

  // 가로와 세로의 값들을 저장한 배열에서 가장 큰 수를 가져옵니다.
  max_w = Math.max(...list_w);
  max_h = Math.max(...list_h);

  // 지갑의 넓이를 반환합니다.
  return max_w * max_h;
}
