package com.user.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class hello {

    @GetMapping
    public String welcome() {
        return "welcome to spring boot";
    }

}
