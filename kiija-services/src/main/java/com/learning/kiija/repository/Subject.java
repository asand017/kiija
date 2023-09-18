package com.learning.kiija.repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "subjects")
public class Subject {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer subject_id;

    private String name;

    private Integer set_id;

    public Subject() {}

    public Subject(String name, Integer set_id) {
        this.name = name;
        this.set_id = set_id;
    }

    public Integer getSubject_id() {
        return subject_id;
    }

    public void setSubject_id(Integer subject_id) {
        this.subject_id = subject_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSet_id() {
        return set_id;
    }

    public void setSet_id(Integer set_id) {
        this.set_id = set_id;
    }

    
}
