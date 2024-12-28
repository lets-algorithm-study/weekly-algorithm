/**
 * [uid]사용자가 [닉네임]으로 채팅방에 입장
 * - "Enter [uid] [닉네임]"
 * [uid]사용자가 채팅방에서 퇴장
 * - "Leave [uid]"
 * [uid]사용자가 닉네임을 [넥네임]으로 변경
 * - "Change [uid] [닉네임]"
 * 1. 재입장 시 변경해도 모든 채팅내역의 닉네임 변경
 * 2. 그냥 변경해도 모든 채팅내역의 닉네임 변경
 *
 * @param {string[]} record 채팅방에 들어오고 나가거나 닉네임을 변경한 기록이 담김
 * @returns {string[]} 최종으로 방을 개설한 사람이 보는 메시지
 */
function solution(record) {
    const nicknameHistory = {};
    const recordStr = record.map(r => r.split(" "));

    for (const [cmd, uid, nickname] of recordStr) {
        // Leave 아니면 닉네임 맵에 갱신
        if (cmd !== "Leave") {
            nicknameHistory[uid] = nickname;
        }
    }

    let messages = [];
    for (const [cmd, uid] of recordStr) {
        const h = nicknameHistory[uid];
        // 이제 문자열을 만들기 위해 저장한 닉네임 맵을 참조.
        if (cmd === "Enter") {
            messages.push(h + "님이 들어왔습니다.");
        } else if (cmd === "Leave") {
            messages.push(h + "님이 나갔습니다.");
        }
    }
    return messages;
}

const r1 = solution(
    [
        "Enter uid1234 Muzi",
        "Enter uid4567 Prodo",
        "Leave uid1234",
        "Enter uid1234 Prodo",
        "Change uid4567 Ryan"
    ],
)
console.log(r1);
// [
//     "Prodo님이 들어왔습니다",
//     "Ryan님이 들어왔습니다.", 
//     "Prodo님이 나갔습니다.",
//     "Prodo님이 들어왔습니다."
// ]