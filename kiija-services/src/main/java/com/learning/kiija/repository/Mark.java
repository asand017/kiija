package com.learning.kiija.repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "marks")
public class Mark {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer topic_id;

    private Integer user_id;

    private boolean correct;

    private String problem;

    private Mark() {}

    public Mark(Integer topic_id, Integer user_id, boolean correct, String problem){
        this.topic_id = topic_id;
        this.user_id = user_id;
        this.correct = correct;
        this.problem = problem;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(Integer topic_id) {
        this.topic_id = topic_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public String getProblem() {
        return problem;
    }

    public void setProblem(String problem) {
        this.problem = problem;
    }
}
