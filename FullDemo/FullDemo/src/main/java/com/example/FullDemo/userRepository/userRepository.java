package com.example.FullDemo.userRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.FullDemo.model.User;

public interface userRepository extends JpaRepository<User, String> {

}
