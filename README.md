# NestJs Study

#### 1. hello world

#### 2. express + ts 활용

#### 3. dataMocking 이용한 express 이해하기

- express의 middleware 구현

  - middleware? 서버와 클라이언트 사이에 위치해 두 end point가 데이터를 주고받도록 중간에서 매개 역할을 하는것
  - express의 use 키워드 사용
  - 코드는 위에서 아래로 차례로 실행되므로 use키워드의 위치가 중요
    - middleware역할: api 함수 가장 위에 위치
    - 존재하지 않는 api 요청시 error handling 역할: api 함수를 모두 지난 맨 끝에 위치

  ```javascript
  app.use((req, res, next) => {
    console.log("logging middleware");
    next();
  });

  app.get("/", (req: express.Request, res: express.Response) => {
    console.log(req.rawHeaders[1]);
    res.send({ animals: Animal });
  });

  app.get("/cat", (req, res) => {
    console.log("cat data");
    res.send({ cat: Animal[2] });
  });

  app.use((req, res, next) => {
    res.send({ error: "404 not found error" });
  });
  ```

- CRUD 구현하기

1.  Read : 특정 id값 get

```javascript
route.get("/animal/:id", (req, res) => {
  const id = req.params.id;
  const cat = Animal.find((cat) => {
    return cat.id === id;
  });
});
```

2. Create : post메소드로 json으로 입력되어 들어오는 데이터 저장

```javascript
// json middleware: post로 입력받는 데이터(json)를 식별하기 위한 미들웨어
app.use(express.json());

...

route.post('/animal', (req, res) => {
    const id = req.params.id;
    const cat = Animal.find((cat) => {
      return cat.id === id;
    });
});
```

3. update

- PUT: 업데이트할 데이터를 대체
- PATCH: 부분적으로 데이터를 업데이트

```javascript
route.put('/animal/:id', (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    let result;
    Animal.forEach((animal) => {
      if (animal.id === id) {
        animal = data;
//...생략
}

route.patch('/animal/:id', (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    let result;
    Animal.forEach((animal) => {
      if (animal.id === id) {
        animal = { ...animal, ...data }; // 구조분해. 기존키값과 비교해 중복되는 값 대체
        result = animal;
      }
    });
    //...생략
}
```

4. delete: 데이터 삭제

```javascript
route.delete('/animal/:id', (req, res) => {
  try {
    const id = req.params.id;
    const deleted = Animal.filter((animal) => animal.id !== id);

```

- route (API end-point) 모듈 분리하기
  - 분리 전
    ![모듈분리전](https://user-images.githubusercontent.com/24540759/149896292-f60fbf3d-5ba9-479e-b459-3ba41d46555e.PNG)
  - 분리 후
    ![모듈분리후](https://user-images.githubusercontent.com/24540759/149896308-8d416815-6bb7-4ba6-928d-03b5aaa3ee6c.PNG)

### 4. NestJS

#### 1. Controller 패턴

- 컨트롤러는 들어오는 요청을 받아 적절한 service로 넘겨 응답 데이터를 받아 클라이언에게 반환함

![image](https://user-images.githubusercontent.com/24540759/151119926-8585d408-d752-4838-952b-914a21b323a8.png)

#### 2. 의존성 주입(dependency injection, DI)
- providers 키워드 활용
- module.ts파일에 controller에서 사용할 service 파일들을 providers에 입력하여 controller에서 직접적으로 service를 주입받는것이 아닌 module.ts에서 의존하여 주입받는것
- controllers: 사용자
- providers: 제공자
```javascript
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
```

#### 3. 캡슐화
- exports 키워드 활용
- UserService 파일을 AppCotroller에서 사용할 경우 선언방법 2가지

1) providers에 userService 추가하기
```javascript
//app.module.ts
@Module({
  controllers: [AppController],
  providers: [AppService, UserService]
})
```

2) UserModule에서 exports 사용, AppModule에서 imports 사용
```javascript
//users.module.ts
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})

//app.module.ts
@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
```

