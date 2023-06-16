export function apiCall() {
  return fetch("/web/src/data.json")
    .then((response) => response.json())
    .catch((error) => error);
}

export function removeChild(selector) {
  // 부모 노드 선택
  const parent = document.querySelector(selector);

  // 자식 노드 삭제
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}
