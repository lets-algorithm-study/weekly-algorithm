function getElementsByClassName(className) {
  const body = [...document.body.children];

  const result = [];

  const exploreNode = els => {
    for (const el of els) {
      if (el.classList.contains(className)) {
        result.push(el);
      }

      if (el.children.length !== 0) {
        exploreNode([...el.children]);
      }
    }
  };

  exploreNode(body);

  return result;
}

console.log(getElementsByClassName('a'));
