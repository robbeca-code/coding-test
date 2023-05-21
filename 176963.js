function solution(name, yearning, photo) {
    let answer = [];
    let maps = new Map();
    
    // map 객체에 사람 이름과 해당 사람의 그리움 점수를 저장합니다.
    name.forEach((v, i) => {
        maps.set(v, yearning[i]);
    });
    
    
    photo.forEach((v, i) => {
        // 사진의 추억 점수를 관리하는 변수입니다.
        let score = 0;
        
        // 사진에서 그리움 점수를 가지고 있는 사람있다면 해당 점수를 score에 저장하고, 그렇지 않다면 0을 저장합니다.
        for(let name of v) {
            if(maps.has(name)) {
                score += maps.get(name);
            } else {
                score += 0;
            }
        }
        // 각각 사진의 추억점수를 answer에 저장합니다.
        answer.push(score);
    })
    
    // 최종 추억 점수를 가지고 있는 answer을 반환합니다.
    return answer;
}
