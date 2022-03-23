package com.example.gimmefud;

import com.example.gimmefud.data.Customer;
import com.example.gimmefud.data.CustomerRepository;
import com.example.gimmefud.data.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;

    @PostConstruct
    public List<Customer> getcustomer(){
    return customerRepo.findAll();
    }


}
