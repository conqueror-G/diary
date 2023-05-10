// 이걸 named export 라고 부른다
// 모듈에서 직접적으로 내보낼 수 없기 때문에, 내보내기를 담당하는 파일을 만들게 된다 //~> index.ts
// 만약 모듈에서 내보내려고 할 경우, 이미 아래 코드에서 export로 내보내고 있기 때문에 에러가 발생한다

export const 사람 = {
  name: '민수',
  age: 1,
}

export const 동물 = {
  name: 'cat',
  age: 1,
}
