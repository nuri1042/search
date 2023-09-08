# 원티드 프리온보딩 3주차 과제

- 해당 repository는 원티드 프리온보딩 프론트엔트 인턴쉽 12차 3주차 과제을 다뤘습니다.


## 프로젝트 실행 방법

1. 프로젝트 클론

```
git clone https://github.com/nuri1042/search.git
```

2. 해당 폴더로 이동

```
cd pre-onboarding-12th-3-4
```

3. 프로젝트 패키지 설치

```
npm install
```

4. json-server 실행

```
npm run server
```

5. 프로젝트 실행

```
npm start
```


## 기능 상세
### 1. 로컬 캐싱

#### cache storage 사용 

- ✅ 이유: 용량 제한이 비교적으로 적은 cacheStorage 를 사용
- api 와 결합하여 api 호출 전 get 메서드를 통해 검색어에 대한 캐시가 있는지 확인하고 있으면 해당 캐시를 리턴, 없으면 api호출 후 set 메서드를 이용해 캐시에 저장하였습니다.

#### 만료시간 구현

- 캐시의 header에 FETCH_DATE를 저장
- 이후 해당 캐시에 접근 시 `현재시간-FETCH_DATE > EXPIRE_TIME` 로 비교해 해당 캐시가 만료됐는지 여부를 판단, 만료되었으면 삭제하였습니다.


### 2. API 호출 횟수 줄이기

- 디바운스
- 모든 언어 통틀어 setTimeout delay 시간을 짧게 설정해 useDebounce 커스텀훅에서 처리
- ✅ 이유: 연속적으로 이벤트가 발생할 때 이를 그룹화하여 특정 시간이 지난 뒤 마지막 이벤트만 실행한다


### 3. 키보드 접근성

>-키보드만으로 추천 검색어들로 이동 가능하도록 구현

- contextApi에서 keyboardEvent를 관리
- 검색창의 input box에서 onKeyDown 이벤트를 주고 이벤트 발생 시 index값을 변경해 ArrowDown, ArrowUp 관리




