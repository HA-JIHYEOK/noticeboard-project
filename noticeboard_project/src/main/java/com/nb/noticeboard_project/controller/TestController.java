package com.nb.noticeboard_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "Hee23";
    }
    @GetMapping("/")
    public String test2() {
        return "forward:index.html";
    }
}
