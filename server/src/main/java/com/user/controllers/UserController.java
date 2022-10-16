package com.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.models.entities.UserEntities;
import com.user.services.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public UserEntities save(@RequestBody UserEntities user) {
        return userService.save(user);
    }

    @GetMapping("{id}")
    public UserEntities findOne(@PathVariable("id") Long id) {
        return userService.findOne(id);
    }

    @PatchMapping
    public UserEntities update(@RequestBody UserEntities user) {
        return userService.save(user);
    }

    @DeleteMapping("{id}")
    public void removeOne(@PathVariable("id") Long id) {
        userService.removeOne(id);
    }

    @GetMapping
    public Iterable<UserEntities> findAll() {
        return userService.findAll();

    }
}
