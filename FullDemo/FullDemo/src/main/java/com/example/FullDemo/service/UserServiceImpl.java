package com.example.FullDemo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.FullDemo.dao.UserDaoImpl;
import com.example.FullDemo.model.User;
@Component
public class UserServiceImpl implements userService {
	@Autowired
	UserDaoImpl userDaoImpl;
	@Override
	public void addUser(String email, @RequestBody User user) {
		
		userDaoImpl.addUser(email, user);
	}

	@Override
	public Optional<User> getUser(String email) {
		return userDaoImpl.getUser(email);
	}

}
