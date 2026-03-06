package com.eventflow.entity;

import jakarta.persistence.*;

@Entity
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long eventId;
    private Long userId;
    private String qrCode;
    private boolean present;

    // Getters & Setters
    public Long getId() { return id; }

    public Long getEventId() { return eventId; }
    public void setEventId(Long eventId) { this.eventId = eventId; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getQrCode() { return qrCode; }
    public void setQrCode(String qrCode) { this.qrCode = qrCode; }

    public boolean isPresent() { return present; }
    public void setPresent(boolean present) { this.present = present; }
}