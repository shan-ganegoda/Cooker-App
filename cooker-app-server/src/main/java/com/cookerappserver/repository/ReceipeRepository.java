package com.cookerappserver.repository;

import com.cookerappserver.entity.Receipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceipeRepository extends JpaRepository<Receipe,Integer> {
}
