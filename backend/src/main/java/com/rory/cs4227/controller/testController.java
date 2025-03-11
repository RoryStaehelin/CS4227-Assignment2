package com.rory.cs4227.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class testController {
  @GetMapping("/hello")
  public String hello() {
    return "Hello, Spring Boot!";
  }
}
