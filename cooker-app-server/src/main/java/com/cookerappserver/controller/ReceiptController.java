package com.cookerappserver.controller;

import com.cookerappserver.entity.Category;
import com.cookerappserver.entity.Receipe;
import com.cookerappserver.repository.CategoryRepository;
import com.cookerappserver.repository.ReceipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReceiptController {

    private final ReceipeRepository receipeRepository;

    @GetMapping("/receipts")
    public List<Receipe> getAll(){

        return receipeRepository.findAll();
    }
}
