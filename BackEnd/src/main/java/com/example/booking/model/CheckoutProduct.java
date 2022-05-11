package com.example.booking.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@RequiredArgsConstructor
@Data
@Entity
@Table(name = "checkout_products")
public class CheckoutProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Checkout checkout;

    @ManyToOne
    private Product product;

    @Column(name = "quantity")
    private int quantity;
}
