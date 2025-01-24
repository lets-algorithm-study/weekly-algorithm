// 최소 힙(Min Heap) 클래스 정의
class MinHeap {
    constructor() {
        this.items = []; // 힙을 배열로 표현합니다. 완전 이진 트리의 특성을 유지하기 위해 배열을 사용합니다.
    }

    // 힙의 현재 크기를 반환합니다.
    size() {
        return this.items.length;
    }

    /**
     * 힙에 새로운 아이템을 삽입합니다.
     * 삽입 후 힙의 속성을 유지하기 위해 bubbleUp 메서드를 호출합니다.
     * @param {Array} item - 힙에 삽입할 아이템 (예: [거리, 노드])
     */
    insert(item) {
        this.items.push(item); // 힙의 마지막에 새로운 아이템을 추가합니다.
        this.bubbleUp(); // 삽입 후 힙의 속성을 유지하기 위해 bubbleUp을 수행합니다.
    }

    /**
     * 힙에서 최솟값을 제거하고 반환합니다.
     * 루트 노드를 제거한 후, 마지막 요소를 루트로 이동시키고 bubbleDown 메서드를 호출하여 힙 속성을 유지합니다.
     * @returns {Array|null} - 제거된 최솟값 아이템 또는 힙이 비어있을 경우 null
     */
    pop() {
        if (this.size() === 0) return null; // 힙이 비어있으면 null을 반환합니다.
        const min = this.items[0]; // 최솟값인 루트 노드를 저장합니다.
        this.items[0] = this.items[this.size() - 1]; // 마지막 요소를 루트로 이동시킵니다.
        this.items.pop(); // 마지막 요소를 제거합니다.
        this.bubbleDown(); // 힙의 속성을 유지하기 위해 bubbleDown을 수행합니다.
        return min; // 최솟값을 반환합니다.
    }

    /**
     * 힙 내에서 두 인덱스의 아이템을 교환합니다.
     * @param {number} a - 첫 번째 인덱스
     * @param {number} b - 두 번째 인덱스
     */
    swap(a, b) {
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }

    /**
     * 새로운 아이템을 힙의 적절한 위치로 올립니다.
     * 삽입된 아이템이 부모 노드보다 작으면 부모와 교환을 반복하여 힙의 속성을 유지합니다.
     */
    bubbleUp() {
        let index = this.size() - 1; // 마지막에 삽입된 아이템의 인덱스
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스를 계산합니다.
            // 현재 노드가 부모 노드보다 작으면 교환합니다.
            if (this.items[parentIndex][0] <= this.items[index][0]) break;
            this.swap(index, parentIndex); // 부모와 현재 노드를 교환합니다.
            index = parentIndex; // 새로운 부모 노드로 이동합니다.
        }
    }

    /**
     * 힙의 최상단 노드를 적절한 위치로 내립니다.
     * 루트 노드가 자식 노드보다 크면 더 작은 자식 노드와 교환을 반복하여 힙의 속성을 유지합니다.
     */
    bubbleDown() {
        let index = 0; // 루트 노드부터 시작합니다.
        while (index * 2 + 1 < this.size()) { // 왼쪽 자식 노드가 존재하는 동안 반복합니다.
            let leftChild = index * 2 + 1; // 왼쪽 자식 노드의 인덱스
            let rightChild = index * 2 + 2; // 오른쪽 자식 노드의 인덱스

            // 더 작은 자식 노드를 찾아냅니다.
            let smallerChild =
                rightChild < this.size() &&
                    this.items[rightChild][0] < this.items[leftChild][0] ?
                    rightChild : leftChild;

            // 현재 노드가 더 작거나 같으면 종료합니다.
            if (this.items[index][0] <= this.items[smallerChild][0]) break;

            this.swap(index, smallerChild); // 현재 노드와 더 작은 자식 노드를 교환합니다.
            index = smallerChild; // 교환된 자식 노드로 인덱스를 이동합니다.
        }
    }
}