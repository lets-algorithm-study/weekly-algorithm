function getElementsByClassName(className) {
  const result = [];

  const dfs = node => {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }

    if (!node.children) {
      return;
    }

    for (const child of node.children) {
      dfs(child);
    }
  };

  dfs(document.body);

  return result;
}

console.log(getElementsByClassName('a'));
