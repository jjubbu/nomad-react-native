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


## Expo
js와 마크업, 스타일링부분만 빠진 어플리케이션. 따라서 컴파일을 따로 해줄 필요가 없다!

1. https://expo.dev/ 가입
2. 프로젝트 생성
3. 터미널에 <code>npm i -g expo-cli</code> 와 <code>expo init 프로젝트명</code>쳐서 설치 후 초기화
4. mac 유저라면 [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) 설치. <br/>
brew가 깔려 있다면 <code>brew install watchman</code>
5. 핸드폰에 Expo 어플 설치.







