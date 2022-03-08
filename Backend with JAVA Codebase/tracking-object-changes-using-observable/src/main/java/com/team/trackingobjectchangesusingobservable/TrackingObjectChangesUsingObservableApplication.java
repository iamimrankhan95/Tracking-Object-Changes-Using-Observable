package com.team.trackingobjectchangesusingobservable;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TrackingObjectChangesUsingObservableApplication {

    public static void main(String[] args) {
        SpringApplication.run(TrackingObjectChangesUsingObservableApplication.class, args);
    }

    @GetMapping("/hello")
    public String sayHello(@RequestParam(value="myName", defaultValue = "Jannat")String name){
        return String.format("Hello %s!" , name);
    }
}
