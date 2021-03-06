package com.example.gimmefud.controllers;

import com.example.gimmefud.OrderService;
import com.example.gimmefud.data.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping("/orders")
    public List<Order>getallOrders(){
        return orderService.getallOrders();
    }
    @PostMapping("/orders")
    public Order createOrder(@RequestBody Order order){
        return orderService.createOrder(order);
    }

    @PutMapping("/orders")
    public Order updateOrder(@RequestBody Order order)
    {
        return orderService.updateOrder(order);
    }

    @GetMapping("/orderrest/{rname}")
    public List<Order>getRestaurantOrder( @PathVariable String rname){
        return orderService.findByRestaurant(rname);
    }

    @GetMapping("/ordercust/{username}")
    public List<Order>getCustomerOrder( @PathVariable String username){
        return orderService.findByCustomer(username);
    }

}
