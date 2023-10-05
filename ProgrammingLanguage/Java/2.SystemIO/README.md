# Java

## System I/O

```
// 출력

System.out.println("...");
System.out.print("...");
// 1개
System.out.printf("... %d | %s",값1);
// 2개
System.out.printf("... %1$d  %2$s",값1,값2,...);


// 입력

int keyCode = System.in.read();

Scanner scanner = new Scanner(System.in);
String line = scanner.nextLine();
```



|           |                     |
|-----------|---------------------|
| 정수        | %d<br/>%6d          |
| 실수        | %f        <br/>%.2f |
| 문자열       | %s                  |
| 특수<br/>문자 | \t<br/>\n<br/>%%    |


- 비교 : 기본타입 == , 문자열 equals() 