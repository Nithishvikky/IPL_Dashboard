package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@jakarta.persistence.Table(name="Teams")
public class Teams {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "team_id")
	private Integer id;
	
	@Column(name = "team_name")
    private String Name;
	
	@Column(name = "name")
    private Integer player;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public Integer getPlayers() {
		return player;
	}
	public void setPlayers(Integer players) {
		this.player = players;
	}
    
    
}
