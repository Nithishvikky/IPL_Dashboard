package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Points;

import com.example.demo.service.PointsService;

@CrossOrigin
@RestController
@RequestMapping("/points")
public class PointsController {

   @Autowired
   PointsService ss;
   
	
   @GetMapping("/get")
   public List<Points> getAllPoints() {
       return ss.getAllPoints();
   }
   
   @GetMapping("/get1/{id}")
	public Optional<Points> GetinfoId(@PathVariable int id){
		return ss.getInfoid(id);
	}
   
   @PutMapping("/update/{id}")
	public String updateByid(@RequestBody Points aa,@PathVariable int id) {
	   Optional<Points> temp = ss.getInfoid(id);
		if(temp.isPresent()) {
			ss.update(aa,id);
			return "Object updated successfully!";
		}
		return "Enter a valid id!";
	}
   
}