package com.user.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.models.entities.UserEntities;
import com.user.models.repo.UserRepo;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public UserEntities save(UserEntities User) {
        return userRepo.save(User);
    }

    public UserEntities findOne(Long id) {
        Optional<UserEntities> user = userRepo.findById(id);
        if (!user.isPresent()) {
            return null;
        } else {
            return user.get();
        }
    }

    public Iterable<UserEntities> findAll() {
        return userRepo.findAll();

    }

    public void removeOne(Long id) {
        userRepo.deleteById(id);
    }

    public List<UserEntities> findByName(String name) {
        return userRepo.findByNameContains(name);
    }
}
