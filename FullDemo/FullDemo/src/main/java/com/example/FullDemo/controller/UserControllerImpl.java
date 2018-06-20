package com.example.FullDemo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FullDemo.model.User;
import com.example.FullDemo.service.UserServiceImpl;

@RestController()
@RequestMapping("/users")
public class UserControllerImpl  {
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@GetMapping("/hello")
	public String sample()
	{
		return "Hello";
	}
	@PostMapping(value="/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addUser(@PathVariable String email, @RequestBody User user) {
		 userServiceImpl.addUser(email,user);
		
	}

	@GetMapping(value="/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<User> getUser(@PathVariable String email) {
		return userServiceImpl.getUser(email); 
	
	}

}
