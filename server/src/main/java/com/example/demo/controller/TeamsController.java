package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Teams;
import com.example.demo.service.TeamsService;

@CrossOrigin
@RestController
public class TeamsController {
	@Autowired
	   TeamsService ss;
	   
		
	   @GetMapping("/teams")
	   public List<Teams> getAllPoints() {
	       return ss.getAllPoints();
	   }
}
