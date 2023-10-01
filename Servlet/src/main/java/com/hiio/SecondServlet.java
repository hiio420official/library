package com.hiio;

import javax.servlet.ServletConfig;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

@WebServlet("/second")
public class SecondServlet extends HttpServlet {

    @Override
    public void init(ServletConfig config) {
        System.out.println("second init()");
    }

    @Override
    public void service(ServletRequest request, ServletResponse response) {
        System.out.println("second service");
    }
}
