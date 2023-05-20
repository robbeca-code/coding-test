function solution(players, callings) {
    // Map으로 선수이름과 순위를 관리합니다.
    let maps = new Map();
    
    players.forEach((v, i) => {
        maps.set(v, i);
    });
    
    callings.forEach(name => {
        const index = maps.get(name);
        const temp = players[index - 1];

        // 선수 순위를 조정합니다.
        players[index - 1] = name;
        players[index] = temp;
        
        // Map에서 값을 직접 변경하기 어렵기 때문에 delete로 지우고 set으로 값을 새롭게 넣습니다.
        maps.delete(name);
        maps.delete(temp);
        maps.set(name, index-1);
        maps.set(temp, index);
    });
    
    // 최종적으로 조정된 순위를 가진 players를 반환합니다.
    return players;
}
