package com.example.gimmefud.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @Column(name = "customer_id")
    public Integer customerId;

    @Column(name = "username")
    public String username;

    @Column(name = "password")
    public String password;

    @Column(name = "fname")
    public String firstName;

    @Column(name = "lname")
    public String lastName;

    @Column(name = "address")
    public String address;

    @Column(name = "phone_number")
    public String phoneNumber;

    public Customer(Integer customerId, String username, String password, String firstName, String lastName, String address, String phoneNumber) {
        this.customerId = customerId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    public Customer(){}
}