package com.eventflow.service;

import com.eventflow.entity.Event;
import java.util.List;

public interface EventService {
    Event createEvent(Event event);
    Event updateEvent(Long id, Event event);
    List<Event> getAllEvents();
    Event getEventById(Long id);
    void deleteEvent(Long id);
}
