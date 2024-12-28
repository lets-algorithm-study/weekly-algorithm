## 해시

데이터를 찾는다고 했을 때 쉽게 떠올려볼 수 있는 방법은 처음부터 끝까지 탐색하는 방법이다. 이 방법은 데이터의 양이 적을 때는 문제가 없지만 데이터의 양이 많아질수록 시간이 오래 걸리는 단점이 있다. 해시는 이러한 단점을 극복하기 위해 고안된 방법이다.
이 방법을 개선하려면 찾아야 할 값이 어디에 있는지 빠르게 찾을 수 있어야 한다. 이를 위해 해시 함수를 사용한다. 해시 함수는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다. 이렇게 해시 함수를 사용하면 데이터를 저장할 때 데이터의 키 값을 해시 함수에 넣어서 해시 값을 얻고, 이 해시 값을 인덱스로 사용하여 데이터를 저장하고 찾을 수 있다. 이렇게 해시 함수를 사용하여 데이터를 저장하면 데이터를 찾을 때 데이터의 양이 많아도 빠르게 찾을 수 있다.

---

### 해시 자세히 보기

사실 우리 생활에도 해시를 사용하는 경우가 많다. 예를 들어, 전화번호부에 이름과 전화번호를 저장할 때 이름을 키로 사용하여 전화번호를 저장한다. 이때 이름을 해시 함수에 넣어서 해시 값을 얻고, 이 해시 값을 인덱스로 사용하여 전화번호를 저장한다. 이렇게 해시 함수를 사용하여 데이터를 저장하면 데이터를 찾을 때 데이터의 양이 많아도 빠르게 찾을 수 있다.


### 해시의 특징
1. 단방향으로 동작한다. 즉, 키를 통해 값을 찾을 수는 있지만 값을 통해 키를 찾을 수는 없다.
2. 찾는 시간 복잡도가 O(1)이다. 즉, 데이터의 양이 많아도 빠르게 찾을 수 있다. 키 자체가 해시함수에 의해 값이 있는 인덱스가 되므로 값을 찾기 위한 ㅌ암색 과정이 필요 없다.
3. 값을 인덱스로 활용하려면 적절한 변환 과정을 거쳐야한다.

해시를 사용하지 않는다면?
해시를 사용하지 않는다면 값을 찾기 위해 데이터의 양에 비례하는 시간이 걸린다. 이는 데이터의 양이 많아질수록 시간이 오래 걸리는 단점이 있다. 해시를 사용하면 데이터의 양이 많아도 빠르게 값을 찾을 수 있다.

반면 해시를 사용하면, 순차 탐색할 필요없이 해시 함수를 사용하여 데이터를 저장하고 찾을 수 있다.

해시테이블은 키와 대응한 값이 저장되어 있는 공간이고, 해시 테이블의 각 데이터를 버킷이라고 부른다.


### 해시의 특성을 활용하는 분야
해시는 단반향으로만 검색할 수 있는 대신 빠르게 원하는 값을 검색할수 있다. 이런 해시의 특성은 데이터를 저장하고 검색하거나, 보안이 필요한 때에 활용됩니다.
1. 비밀번호 관리 : 비밀번호를 해시로 저장하면 원본 비밀번호를 알 수 없어 보안에 도움이 된다.
2. 데이터베이스 인덱싱 : 데이터베이스에서 데이터를 빠르게 검색하기 위해 해시를 사용한다.
3. 블록체인 : 블록체인에서는 해시를 사용하여 블록을 연결한다. 이를 통해 데이터 무결성을 확인할 수 있습니다.


### 해시 함수
해시 함수는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다. 해시 함수는 다음과 같은 특징을 가진다.

#### 해시 함수를 구한혈 때 고려할 대응
1. 해시 함수가 변환한 값은 인덱스로 활용해야 하므로 해시 테이블의 크기를 넘으면 안된다. 해시 테이블의 크기가 N이라면 해시 함수의 반환값은 0부터 N-1까지의 값이어야 한다.
2. 해시 함수가 변환한 값의 충돌은 최대한 적게 발생해야 한다.
충돌이란?
해시 함수가 변환한 값이 같은 경우를 충돌이라고 한다. 충돌이 발생하면 데이터를 찾을 때 시간이 오래 걸릴 수 있다. 따라서 충돌이 최대한 적게 발생하도록 해시 함수를 구현해야 한다.


### 자주 사용하는 해시 함수

#### 나눗셈법
해시 함수를 구현할 때 가장 간단하게 사용할 수 있는 방법은 나눗셈법이다. 나눗셈법은 데이터를 해시 테이블의 크기로 나눈 나머지를 해시 값으로 사용하는 방법이다. 나눗셈법은 다음과 같은 특징을 가진다.
1. 해시 테이블의 크기가 소수여야 한다.
2. 해시 테이블의 크기가 2의 제곱수일 때는 나눗셈을 대신하여 비트 연산을 사용할 수 있다.
3. 나눗셈법은 해시 테이블의 크기가 소수일 때 충돌이 적게 발생한다.
4. 나눗셈법의 해시 테이블 크기는 데이터의 개수보다 크거나 같아야 한다.

#### 곱셈법
hash(key) = ((key * A) % 1 )* m
m은 최대 버킷의 개수, A는 황금비이다. A는 0과 1사이의 값이어야 한다. A는 0.6180339887을 사용한다.

#### 문자열 해싱
hash(s)=(S0]+J[1]*p+s[2]*p: +...+sn-1]*pm) mod m
p는 소수이고, m은 버킷의 개수이다. p는 31을 사용한다.

문자열 해시 함수 수정하기
덧셈을 전부한 다음 모듈러 연산을 하는 왼쪽 수식 대신 , 오른쪽 수식처럼 중간 중간 모듈러 연산
을 해 더한 값을 모듈러 연산하면 오버플로를 최대한 방지할 수 있습니다.
※ 두 수식의 실제 결과는 같습니다.
(a+6)%c=(a%c+6%c)%c
이를 활용해서 앞서 본 문자열 해싱 공식을 수정하면 다음과 같습니다.
hash(s)=(s[01%m+s[l]*p%m+s[2]*p2%m ......s[n-1]*pul%m)%m
해시 함수뿐 아니라 보통 수식에 모듈러 연산이 있는 문제 중 큰 수를 다루는 문제는 이런 오버플
로 함정이 있는 경우가 많습니다. 난이도가 높은 문제는 대부분 이런 함정을 포함하고 있으니 이번
기회에 제대로 기억해두기 바랍니다.


### 충돌 처리

#### 체이닝으로 처리하기
충돌이 발생하면 체이닝을 사용하여 데이터를 연결한다. 체이닝은 데이터를 연결리스트로 연결하여 데이터를 저장하는 방법이다. 체이닝을 사용하면 충돌이 발생해도 데이터를 저장할 수 있다.

#### 개방 주소법으로 처리하기
충돌이 발생하면 개방 주소법을 사용하여 데이터를 저장한다. 개방 주소법은 충돌이 발생하면 다른 버킷에 데이터를 저장하는 방법이다. 개방 주소법에는 선형 탐사, 이차원 탐사, 이중 해싱이 있다.