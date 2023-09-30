# Servlet Study


- JSP : JSP 는 서블릿과 똑같은 기능을 가지지만, 표현 방식과 웹 애플리케이션에서의 역할이 다르다. 서블릿은 자바언어로 구형해야 하지만, JSP는 HTMl 페이지 안에서 스크립트 형태로 구현된다. 서블릿은 컨트롤러 페이지를 만들때 사용지만, JSP는 뷰 페이지를 만들때 사용한다.
- Servlet : 자바 언어로 구현되는 서버 프로그램, 클라이언트가 웹 브라우저를 통해 요청하면 서버에서 실행한 후 결괏값만 클라이언트로 전송한다. 기존의 CGI가 가지던 성능적인 약점을 해결
- Servlet Container : 서블릿과 JSP와 같은 웹서버 애플리케이션들을 저장하는 저장소 역할, 메모리 로딩, 객체 생성 및 포기화 등 서블릿의 생명주기를 관리하는 컨테이너, 서블릿을 수행하려면, 자바 수행환경 웹서버 서블릿 컨테이너를 구성해야한다. 클라이언트 요청에따라 서블릿을 수행하는 프로그램

## 1. Servlet 구현

- HttpServlet 클래스를 상속받아야한다.
- HttpServlet 클래스는 Generic Servlet을 상속 받고, Serializable, Servlet, ServletConfig  인터페이스를 상속받고 있음

## 2. Servlet Interface

- init(), service(), destroy(), getServiceConfig(), getServletInfo() 등 5개의 메소드
- 서블릿 프로그램 실행의 생명주기와 연관된 메소드들

> 1. 처음해보는 Servlet & JSP 웹프로그래밍
