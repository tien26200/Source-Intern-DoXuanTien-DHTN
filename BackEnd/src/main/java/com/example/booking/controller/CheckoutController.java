package com.example.booking.controller;

import com.example.booking.model.Checkout;
import com.example.booking.model.CheckoutProduct;
import com.example.booking.model.Product;
import com.example.booking.repository.CheckoutProductRepository;
import com.example.booking.repository.CheckoutRepository;
import com.example.booking.repository.ProductRepository;
import com.example.booking.service.CheckoutProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/checkout")
@CrossOrigin
public class CheckoutController {

    @Autowired
    private CheckoutRepository checkoutRepository;

    @Autowired
    private CheckoutProductRepository checkoutProductRepository;
    @Autowired
    private CheckoutProductService checkoutProductService;
    @GetMapping
    public ResponseEntity<List<Checkout>> index() {
        return ResponseEntity.ok(checkoutRepository.findAll());
    }

    @GetMapping("/detail/{checkoutId}")
    public ResponseEntity<List<CheckoutProduct>> detail(@PathVariable Long checkoutId) {
        List<CheckoutProduct> checkoutProducts = checkoutProductRepository.findAllByCheckout_id(checkoutId);
        return ResponseEntity.ok(checkoutProducts);
    }

    @PostMapping()
    public ResponseEntity<Checkout> save(@RequestBody Checkout checkout) {
        checkout.setCheckoutId(UUID.randomUUID().toString());
        return ResponseEntity.ok(checkoutRepository.save(checkout));
    }

    @DeleteMapping("/detail/{checkoutId}")
    @ResponseBody
    public String destroy(@PathVariable Long checkoutId){
        checkoutProductService.deleteCProductbyCheckoutID(checkoutId);
        checkoutRepository.deleteById(checkoutId);
        return "Da xoa";
    }

    @PostMapping("/details")
    public ResponseEntity<List<CheckoutProduct>> saveDetail(@RequestBody List<CheckoutProduct> checkoutProducts) {
        return ResponseEntity.ok(checkoutProductRepository.saveAll(checkoutProducts));
    }

//    @DeleteMapping("/detail/{checkoutId}")
//    public String destroy(@PathVariable Long checkoutId){
//        checkoutRepository.deleteById(checkoutId);
//        return "ok";
//    }

}
