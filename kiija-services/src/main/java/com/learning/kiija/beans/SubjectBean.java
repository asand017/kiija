package com.learning.kiija.beans;

import java.util.List;

public class SubjectBean {
    
    private String name;
    private Integer id;
    private List<TopicBean> topics;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public List<TopicBean> getTopics() {
        return topics;
    }
    public void setTopics(List<TopicBean> topics) {
        this.topics = topics;
    }



}
