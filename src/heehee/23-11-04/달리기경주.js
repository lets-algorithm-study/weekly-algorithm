function solution(players, callings) {
    let answer = players.slice();
    
    
    this.switch = function(name, players) {
        const tempPlayers = players.slice();
        const index = tempPlayers.indexOf(name);
        const preName = tempPlayers[index - 1];
        tempPlayers[index] = preName;
        tempPlayers[index - 1] = name;
        return tempPlayers;
    }
    
    
    callings.forEach(v => {
       answer = this.switch(v, answer);
    })
    
    
    return answer;
}