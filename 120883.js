function solution(id_pw, db) {
  let id = '';

  // 먼저 id가 같은게 있으면 해당 배열을 id에 삽입합니다.
  db.forEach((v, i) => {
    if(v[0] === id_pw[0]) {
      id = db[i];
    }
  });

  // 만약 해당되는게 없다면 ""을 반환하기 때문에 조건문에 해당 조건을 쓰고 fail을 반환합니다.
  if(id === "") {
    return 'fail';
  }
  
  // id는 같지만 비밀번호가 다르다면 wrong pw를 반환합니다.
  else if(id[1] !== id_pw[1]) {
    return 'wrong pw';
  }
  
  // pw도 똑같다면 login을 반환합니다.
  else if(id[1] === id_pw[1]) {
    return 'login';
  }
}




/*  다른 사람의 풀이*/
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  
  // 해당 map에 id를 가지고 있다면 pw도 같은지 다르지 먼저 확인하고
  // 이 조건에도 해당하지 않는다면 fail을 반환합니다.
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
