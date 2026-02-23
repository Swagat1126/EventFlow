package com.eventflow.service;

import com.eventflow.entity.Event;
import com.eventflow.repository.EventRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository repo;

    public EventServiceImpl(EventRepository repo) {
        this.repo = repo;
    }

    @Override
    public Event createEvent(Event event) {
        return repo.save(event);
    }

    @Override
    public Event updateEvent(Long id, Event event) {
        Event existing = repo.findById(id).orElseThrow();
        existing.setTitle(event.getTitle());
        existing.setDescription(event.getDescription());
        existing.setLocation(event.getLocation());
        existing.setEventDate(event.getEventDate());
        existing.setOrganizer(event.getOrganizer());
        return repo.save(existing);
    }

    @Override
    public List<Event> getAllEvents() {
        return repo.findAll();
    }

    @Override
    public Event getEventById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    @Override
    public void deleteEvent(Long id) {
        repo.deleteById(id);
    }
}
