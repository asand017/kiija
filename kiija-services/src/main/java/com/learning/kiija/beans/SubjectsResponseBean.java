package com.learning.kiija.beans;

import java.util.List;

import com.learning.kiija.repository.entities.Subject;

public class SubjectsResponseBean {
    
    private List<Subject> subjects;

    public List<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<Subject> subjects) {
        this.subjects = subjects;
    }
}
