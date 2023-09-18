package com.learning.kiija.repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "topics")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer topic_id;

    private String name;

    private Integer subject_id;

    private Topic() {}

    public Topic(String name, Integer subject_id) {
        this.name = name;
        this.subject_id = subject_id;
    }

    public Integer getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(Integer topic_id) {
        this.topic_id = topic_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSubject_id() {
        return subject_id;
    }

    public void setSubject_id(Integer subject_id) {
        this.subject_id = subject_id;
    }


}
