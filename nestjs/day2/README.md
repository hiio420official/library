![](https://velog.velcdn.com/images/hiio420_official/post/7533890f-5684-4801-90e6-f47a80af349f/image.png)
[출처](https://docs.nestjs.com/controllers)

# Controllers
---
NestJS에서는 Spring과 마찬가지로 controller에서 들어오는 요청을 처리하고 클라이언트에게 응답을 다시 보내는 역할을 합니다 .


Controller에서는 애플리케이션의 특정 요청을 처리합니다.
NestJS에서의 Controller는 Spring과 마찬가지로 @Controller **데코레이터**를 사용합니다.
> 메타프로그래밍 기능을 사용해 클래스, 메서드, 파라미터 등에 추가 정보를 붙이는 문법. Nest의 선언형 프로그래밍 핵심
> 메타프로그래밍(Metaprogramming)이란 자기 자신 혹은 다른 컴퓨터 프로그램을 데이터로 취급하며 프로그램을 작성·수정하는 것을 말한다. 넓은 의미에서, 런타임에 수행해야 할 작업의 일부를 컴파일 타임 동안 수행하는 프로그램을 말하기도 한다.

@Controller 또는 클래스 메소드에 작성된 @Get,@Post 등의 데코레이터에 입력된 문자열은 애플리케이션에서 들어오는 요청에 대한 경로를 의미합니다.

**라우팅 메커니즘**은 각 요청을 처리할 컨트롤러를 결정합니다. 
> 라우팅 메커니즘 클라이언트의 요청 URL과 HTTP 메서드(GET, POST 등)를 해당 컨트롤러 메서드에 연결하는 기능

컨트롤러는 여러 경로를 가지며, 각 경로는 서로 다른 작업을 수행할 수 있습니다.


기본 컨트롤러를 만들려면 클래스와 데코레이터를 사용합니다 . 데코레이터는 클래스를 필요한 메타데이터와 연결하여 Nest가 요청을 해당 컨트롤러에 연결하는 라우팅 맵을 생성할 수 있도록 합니다.

# 라우팅 #
다음 예제에서는 기본 컨트롤러를 정의하는 데 필요한@Controller() 데코레이터를 사용합니다. 선택적으로 경로 경로 접두사로 . 를 지정합니다 . 데코레이터에 경로 접두사를 사용하면 관련 경로를 그룹화하고 반복적인 코드를 줄일 수 있습니다. 예를 들어, 경로 아래에 있는 cat 엔터티와의 상호 작용을 관리하는 경로를 그룹화하려면 데코레이터 에 경로 접두사를 지정할 수 있습니다 . 이렇게 하면 파일의 각 경로에 대해 해당 경로 부분을 반복할 필요가 없습니다.cats@Controller()/catscats@Controller()

```javascript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

# CLI
---

```shell
nest g controller [name] 
```
명령어를 통해서 controller 를 class 파일을 생성할 수 있습니다.

# 기타
---

- NestJS Controller는  JavaScript 객체 또는 배열을 반환할 때 JSON으로 자동 직렬화
- 응답의 상태 코드는 기본적으로 항상 200입니다. 단, POST 요청은 201을 사용합니다. @HttpCode(...)핸들러 수준에서 데코레이터를 추가하여 이 동작을 쉽게 변경할 수 있습니다
- 응답 객체를 사용할 수 있으며 , 이 객체는 @Res()메서드 핸들러 시그니처(예: findAll(@Res() response))에 데코레이터를 사용하여 주입할 수 있습니다. 이 방식을 사용하면 해당 객체가 제공하는 네이티브 응답 처리 메서드를 사용할 수 있습니다. 