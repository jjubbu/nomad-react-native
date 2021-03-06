# nomad-react-native
어플 만들고 싶은데 리액트 네이티브를 쓸 줄 몰라서 노마드 강의를 보며 사용하는 레포지토리!


## Setting
웹이 아닌 어플을 만드는 것이기 때문에 추가적으로 깔아야 할 것 들이 있음.
안드로이드라면 안드로이드 개발 관련 툴과 자바 깔아야 함.
맥os라면 엑스코드 있어야 함.

강의에서는 위의 것들을 다운받지 않고 리액트 네이티브를 사용하는 기능을 소개함.
단, 테스트를 위해 만들어진 것. 
따라서 실제 배포를 해야 한다면 위의 귀찮은 것들을 깔아야 한다..!

필요한 것
- node 14.17 버전 이상
- npm 깔려 있으면 됨.


## 리액트 네이티브?
코드가 운영체제와 통신할 수 있도록 다리를 놓아둔 인프라시설.

이 앱이 완성되면 컴파일을 시켜줘야하는데,
안드로이드라면 apk, ios 라면 ipa로 컴파일!
이렇게 앱이 됨.
(이게 java와 xcode 가 필요한 이유.)

리액트로 만든건 리액트로 브라우저에 띄워지지만, 리액트 네이티브에게는 브라우저가 없음!
리액트 네이티브는 인터페이스로 운영체제와 컴포넌트 사이에 있고, 우리가 리액트 네이티브로 작성한 코드들은 ios 나 안드로이드 등에게 건네주는 일종의 "요청서" 이다.
<br/>
리액트 네이티브에 버튼 코드를 적었다면 리액트 네이티브는 ios나 안드로이드에게 버튼을 만들어 달라는 "요청"을 하고 그걸 받아들인 녀석이 버튼을 만들어 주는..것!
<br/>
근디 위의 것들은 Expo 덕에 신경쓰지 않아도 좋다. 근데 난 내가 따로 어플 만들어서 출시까지 하고싶으니까 공부 해야함..!

## Expo
js와 마크업, 스타일링부분만 빠진 어플리케이션. 따라서 컴파일을 따로 해줄 필요가 없다!

1. https://expo.dev/ 가입
2. 프로젝트 생성
3. 터미널에 <code>npm i -g expo-cli</code> 와 <code>expo init 프로젝트명</code>쳐서 설치 후 초기화
4. mac 유저라면 [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) 설치. <br/>
brew가 깔려 있다면 <code>brew install watchman</code>
5. 핸드폰에 Expo 어플 설치.

엑스포를 이용해서 우리는 자바스크립트 부분만 작성하면 된다. 

## 핵심정리
- 리액트 네이티브는 브라우저가 아니다. 우리와 ios/안드로이드 기타등등 사이에 있는 다리(bridge)가 있는 인터페이스!
- 이벤트의 실행: 사용자가 버튼을 터치했을 때
    1. ios/안드로이드 쪽에서 그 행동(화면 터치 이벤트)을 감지, 데이터를 수집함.
    2. 1의 데이터를 리액트 네이티브가 json 형식으로 변환하여 자바스크립트에 전달. (bridge 역할)
    3. 받은 데이터를 토대로 자바스크립트가 이벤트를 실행, 혹은 ui 업데이트
    4. 3의 업데이트 혹은 자바스크립트가 실행된 결과를 리액트 네이티브가 ios/안드로이드에게 전달
    
## 기본셋팅
1. <code>expo init 프로젝트명칭</code>
2. 맨 위의 blank 템플릿 선택 후 엔터 
3. 설치 완료 후 <code>expo login</code>
    - expo에 가입한 유저네임과 비밀번호 입력
4. 로그인 후 <code>yarn start</code> 혹은 <code>npm start</code>
    - 만약 어플에서 프로젝트가 보여서 탭해도 네트워크 오류가 뜬다면 localhost:19002 에서 좌측하단 connection 을 Tunnel 로 바꾸고, 다시 어플로 들어가서 새로고침 후 새로 생긴 프로젝트 탭하면 됨.

기본셋팅이 완료된 후 App.js 내용물을 변경하고 저장하면 바로바로 반영된다! 와~! 정말 좋아~

## 리액트 네이티브의 규칙
- div가 아닌 ```<View></View>``` 를 사용해야함.
- 모든 텍스트는 ```<Text></Text>``` 안에 있어야 함.
- 몇몇 스타일은 사용할 수 없다. (ex. border) 약 98퍼센트는 사용할 수 있음.
- ```StyleSheet.create``` 안의 객체에 스타일을 넣어 적용시킬 수 있다.
    - 자동완성기능을 제공해줌. 
    - 필수 아님. 이걸 제외하고도 사용할 수 있으나 오직 자동완성기능을 위해 사용하며 아주 편리함.
- 스타일 객체의 형식에서 자식 객체의 key값은 class와 비슷한 존재.
- 스타일에서 에러가 생길 경우 리액트 네이티브는 어느 부분의 에러인지 감지해서 알려준다.
- StatusBar 란 핸드폰 상단의 시간/와이파이/배터리 등의 표시바를 의미한다.

[브라우저에서 바로 리액트 네이티브 코딩하는 사이트]("https://snack.expo.dev/")










