package com.learning.kiija.helpers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.learning.kiija.beans.SubjectBean;
import com.learning.kiija.beans.SubjectsResponseBean;
import com.learning.kiija.beans.TopicBean;
import com.learning.kiija.repository.entities.Subject;
import com.learning.kiija.repository.projections.TopicProjection;
import com.learning.kiija.repository.repositories.SubjectRepository;
import com.learning.kiija.repository.repositories.TopicRepository;

@Component
public class SubjectsResponseHelper {

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private TopicRepository topicRepository;

    public SubjectsResponseBean buildSubjectsResponseBean() {
        SubjectsResponseBean response = new SubjectsResponseBean();
        List<SubjectBean> subjectBeans = new ArrayList<SubjectBean>();

        List<Subject> subjects = subjectRepository.findAll();
        for(Subject subject : subjects) {
            SubjectBean subjectBean = new SubjectBean();
            List<TopicBean> topics = new ArrayList<TopicBean>();
            subjectBean.setId(subject.getSubjectId());
            subjectBean.setName(subject.getName());

            List<TopicProjection> tps = topicRepository.findBySubjectId(subject.getSubjectId());
            for(TopicProjection topic : tps){
                TopicBean nTopic = new TopicBean();
                nTopic.setName(topic.getName());
                nTopic.setId(topic.getTopicId());
                topics.add(nTopic);
            }
            subjectBean.setTopics(topics);
            subjectBeans.add(subjectBean);
        }
        response.setSubjects(subjectBeans);
        return response;
    }
    
}
