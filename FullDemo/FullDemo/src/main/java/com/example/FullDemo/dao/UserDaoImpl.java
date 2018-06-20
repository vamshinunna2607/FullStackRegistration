package com.example.FullDemo.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.FullDemo.model.User;
import com.example.FullDemo.userRepository.userRepository;
@Repository
public class UserDaoImpl implements userDao {
	@Autowired
	userRepository userRepository;
	
	@Override
	public void addUser(String email, @RequestBody User user) {
		
		userRepository.save(user);
	}

	@Override
	public Optional<User> getUser(String email) {
		return userRepository.findById(email);
		
	}

}
