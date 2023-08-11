// 여기에 커밋 쭉 드래그 복사 붙여넣기
const commits = ``;

function getLink(tickets) {
  const url = 'https://조직이름기입.atlassian.net/browse';
  let str = '';
  tickets.forEach(item => {
    str += `[${item}](${url}/${item})\n`;
  });
  return str;
}

function extractUniqueTickets(commitHistory) {
  const pattern = /\[(FRSM-\d+)\]/g;
  const matches = commitHistory.match(pattern);
  const tickets = matches ? matches.map(match => match.slice(1, -1)) : []; // Remove brackets
  const uniqueTickets = [...new Set(tickets)]; // Remove duplicates
  return uniqueTickets;
}

console.log(getLink(extractUniqueTickets(commits)));
