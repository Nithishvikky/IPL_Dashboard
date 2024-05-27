package com.example.demo.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@jakarta.persistence.Table(name="points")
public class Points {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "team_id")
	private Integer id;
	
	@Column(name = "team_name")
    private String Name;
	
	@Column(name = "matches")
    private Integer Matches;
	
	@Column(name = "win")
    private Integer win;
	
	@Column(name = "loss")
    private Integer loss;
	
	@Column(name = "points")
    private Integer pointss;
	
	@Column(name = "nrr")
    private Float nrr;
    
    public String getTeamName() {
		return Name;
	}
	public void setTeamName(String TeamName) {
		Name = TeamName;
	}
	public Integer getMatches() {
		return Matches;
	}
	public void setPointss(Integer Pointss) {
		pointss = Pointss;
	}
	public Integer getPointss() {
		return pointss;
	}
	public void setId(Integer Id) {
		id = Id;
	}
	public Integer getid() {
		return id;
	}
	public void setMatches(Integer matches) {
		Matches = matches;
	}
	public Integer getWin() {
		return win;
	}
	public void setWin(Integer win) {
		this.win = win;
	}
	public Integer getLoss() {
		return loss;
	}
	public void setLoss(Integer loss) {
		this.loss = loss;
	}
	public Float getNrr() {
		return nrr;
	}
	public void setNrr(Float nrr) {
		this.nrr = nrr;
	}  
	
}
