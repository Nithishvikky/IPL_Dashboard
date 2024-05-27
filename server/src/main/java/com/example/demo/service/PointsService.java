package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Points;
import com.example.demo.repository.PointsRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PointsService {
   
	@Autowired
	PointsRepo p;
	
	public List<Points> getAllPoints() {
        return p.findAll();
    }
	public Optional<Points> getInfoid(int id){
		return p.findById(id);
	}
	
	public Points update(Points a,int id) {
		Points e = p.findById(id).orElse(null);
		if(e != null) {
			e.setTeamName(a.getTeamName());
			e.setMatches(a.getMatches());
			e.setWin(a.getWin());
			e.setLoss(a.getLoss());
			e.setNrr(a.getNrr());
			e.setPointss(e.getPointss());
			return p.save(e);
		}
		else {
			throw new EntityNotFoundException("Row not found with id: " + id);
		}
	}
}
