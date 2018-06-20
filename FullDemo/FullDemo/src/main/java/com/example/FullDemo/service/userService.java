package com.example.FullDemo.service;

import java.util.Optional;

import com.example.FullDemo.model.User;

public interface userService {

	public void addUser(String email, User user);
	public Optional<User> getUser(String email);
}
