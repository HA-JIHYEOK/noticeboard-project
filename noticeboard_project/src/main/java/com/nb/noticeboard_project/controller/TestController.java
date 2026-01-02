package com.nb.noticeboard_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class TestController {
    @GetMapping("/terms")
    public String test2() {
        return "forward:register/terms.html";
    }

    @GetMapping("/register")
    public String test3() {
        return "forward:register/register.html";
    }

    /*@GetMapping("/terms")
    public String test3() {
        return "forward:register/terms.html";
    }*/

}
