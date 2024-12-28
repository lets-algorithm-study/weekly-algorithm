# 해시의 개념

- 탐색!
- 해시함수를 사용해서 변환한 값을 인덱스로 삼아 키와 값을 저장해서 빠른 데이터 탐색을 제공하는 자료구조.
- 키를 활용하여 데이터 탐색을 빠르게한다.
  
## 해시의 특징

- 해시는 단방향
  - 키를 통해 값을 찾을 수 있지만, 거꾸로 값을 통해 키를 찾을 수는 없다.
  - 탐색은 TC O(1). 키 자체가 해시함수에 의해 값이 있는 인덱스가 되므로 값을 찾기위한 탐색과정이 필요 없다.
  
### 해시를 사용하지 않는 다면?

값의 위치에 대한 정보가 없음.

보통은 해시 테이블(Hashtable) 구조로 많이 사용.

### 해시 테이블

키와 대응한 값이 저장되어 있는 공간. 해시 테이블의 각 데이터 -> 버킷(bucket)

### 해시의 활용분야

데이터 저장, 검색, 보안
코테에선 특정 데이터를 탐색하는 횟수가 많을 경우 해시를 고려하면 좋음.

- 비밀번호 관리: 비밀번호를 해싱하여 평문이 아닌 상태로 사용하여 보안성을 유지.
- 데이터베이스 인덱싱: 데이터베이스에 저장된 데이터를 효율적으로 검색할 때.
- 블록체인: 각 블록은 이전 블록의 해시값을 포함하고 있으며, 이를 통해 데이터 무결성을 확인할 수 있다.