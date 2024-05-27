package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.model.Points;


public interface PointsRepo extends JpaRepository<Points, Integer>{
	
}
