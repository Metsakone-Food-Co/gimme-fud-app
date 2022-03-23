package com.example.gimmefud.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.gimmefud.data.Restaurant;
import com.example.gimmefud.data.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/restaurants")
public class RestaurantController {

    @Autowired
    RestaurantRepository restaurantRepo;


    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepo.findAll();
    }


    @PostMapping
    public Restaurant createRestaurant(@RequestBody Restaurant newRestaurant){
        return restaurantRepo.save(newRestaurant);
    }

}
