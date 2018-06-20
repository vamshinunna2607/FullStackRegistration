package com.example.FullDemo.dao;

import java.util.Optional;

import com.example.FullDemo.model.User;

public interface userDao {

	public void addUser(String email, User user);
	public Optional<User> getUser(String email);
}
