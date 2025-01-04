// 27. 이진탐색트리 구현

class Node{
  constructor(key){
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

// 이진 탐색트리클래스
class BST {
  // 초기에 아무 노드도 없는 상태
  constructor(){
    this.root = null;
  }

  // 루트 노드부터 시작해서 이진 탐색 트리 규칙에 맞는 위치에 새 노드를 삽입
  insert(key) {
    // 루트 노드가 없는 경우 새로운 노드를 루트 노드로 추가
    if(!this.root){
      this.root = new Node(key);
    }else{
      // 루트가 있다면
      let curr = this.root;
      while (true){
        // 삽입하려는 값이 현재 노드의 값보다 작은 경우 왼쪽 자식 노드로 이동
        if(key < curr.val){
          if(curr.left){
            curr = curr.left;
          } else{
            // 현재 노드의 왼쪽 자식 노드가 없는 경우 새로운 노드 추가
            curr.left = new Node(key);
            break;
          }
        }else{
          // 삽입하려는 값이 현재 노드의 값보다 큰 경우 오른쪽 자식 노드로 이동
          if(curr.right){
            curr = curr.right;
          }else{
            // 현재 노드의 오른쪽 자식 노드가 없는 경우 새로운 노드 추가
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    // 현재 노드가 존재하고, 찾으려는 값과 현재 노드의 값이 같지 않은 경우 반복
    while(curr && curr.val !== key){
      // 찾으려는 값이 현재 노드의 값보다 작은 경우 왼쪽 자식 노드로 이동
      if(key < curr.val){
        curr = curr.left;
      }else{
        // 찾으려는 값이 현재 노드의 값보다 큰 경우 오른쪽 자식 노드로 이동
        curr = curr.right;
      }
    }
    return curr;
  }
}


// list에 있는 데이터를 활용해서 이진 탐색트리 생성, searchList 원소 탐색
function solution(list, searchList){
  const bst = new BST();
  // 배열의 각 요소를 이용하여 이진 탐색 트리 생성
  for(const key of list){
    bst.insert(key);
  }
  const result = [];
  // 검색배열의 각 요소를 이진 탐색트리에서  검색하고, 검색 결과를 배열에 추가
  for (const searchVal of searchList){
    if(bst.search(searchVal)){
      result.push(true);
    }else{
      result.push(false);
    }
  }
  return result;
}