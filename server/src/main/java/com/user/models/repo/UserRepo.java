package com.user.models.repo;

import com.user.models.entities.UserEntities;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<UserEntities, Long> {
    List<UserEntities> findByNameContains(String name);
}
