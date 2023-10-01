package com.hiio;


import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import java.io.IOException;

public class FirstServlet extends HttpServlet {

    @Override
    public void init(ServletConfig config) {
        System.out.println("init() 실행");
    }
    
    @Override
    public void service(ServletRequest arg0, ServletResponse arg1) throws ServletException, IOException {
        System.out.println("service() 실행");
    }
}
