package com.eventflow.entity;

import jakarta.persistence.*;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long eventId;
    private Long userId;
    private String comment;
    private int rating;

    // Getters & Setters
    public Long getId() { return id; }

    public Long getEventId() { return eventId; }
    public void setEventId(Long eventId) { this.eventId = eventId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }
}