/**
 *
 * @param {number} n 처음 표의 행 개수
 * @param {number} k 처음에 선택한 행의 위치
 * @param {string[]} cmd 수행한 명령어 위치
 */
function solution(n, k, cmd) {
    const table = Array.from({length: n}, () => true);
    let cur = k;
    let last = n - 1;
    const history = [];

    for (const c of cmd) {
        if (c.startsWith('U')) {
            cur = up(+c.split(' ')[1], cur, table);
            continue
        }

        if (c.startsWith('D')) {
            cur = down(+c.split(' ')[1], cur, table);
            continue
        }

        if (c === 'C') {
            table[cur] = false;
            history.push(cur);

            if (cur === last) {
                last--
                cur = up(1, cur, table);
            } else {
                cur = down(1, cur, table);
            }
            continue;
        }

        if (c === 'Z') {
            let restored = history.pop();
            table[restored] = true;

            if (cur === last + 1) {
                last++
            }
        }
    }

    return table.map(notDeleted => notDeleted ? 'O' : 'X').join('');
}

function up(cnt, cur, table) {
    while (cnt > 0) {
        cur--;
        if (table[cur]) cnt--;
    }
    return cur;
}

function down(cnt, cur, table) {
    while (cnt > 0) {
        cur++;
        if (table[cur]) cnt--;
    }
    return cur;
}