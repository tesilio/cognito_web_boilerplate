# 회원 서비스 web boilerplate
이 프로젝트는 회원 가입, 로그인 등의 화면을 구성하기 위해 만들어졌습니다.

## 구성
- [참고](https://meetup.toast.com/posts/153)
- NodeJs v8.10
- Webpack4
- [공식문서 샘플코드](https://docs.aws.amazon.com/ko_kr/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html)
- [SDK 링크](https://github.com/aws/amazon-cognito-auth-js/tree/master/dist)
- [AWS javascript framework](https://aws-amplify.github.io/docs/js/authentication)

## 설치
```bash
npm install --production
```

## 개발 및 배포를 위한 명령어
```bash
# 개발!
npm run dev # 브라우저 오픈!

# 개발 빌드!
npm run build-dev

# 프로덕션 빌드!
npm run build
```