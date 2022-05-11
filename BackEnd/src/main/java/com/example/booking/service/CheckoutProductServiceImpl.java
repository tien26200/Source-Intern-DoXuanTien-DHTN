package com.example.booking.service;

import com.example.booking.model.Checkout;
import com.example.booking.model.CheckoutProduct;
import com.example.booking.model.Product;
import com.example.booking.repository.CheckoutProductRepository;
import com.example.booking.repository.CheckoutRepository;
import com.example.booking.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CheckoutProductServiceImpl implements CheckoutProductService{

    //Khai báo các repository để sử dụng
    //Repository để thao tác trên CSDL
    private final CheckoutProductRepository checkoutProductRepository;
    private final CheckoutRepository checkoutRepository;
    private final ProductRepository productRepository;
    @Override
    public String deleteCProductbyCheckoutID(Long id){
        Optional<Checkout> checkout = checkoutRepository.findById(id);
        if(checkout.isPresent()){
            List<CheckoutProduct> checkoutProducts = checkoutProductRepository.findAll();
            for(CheckoutProduct COProduct : checkoutProducts){
                if(COProduct.getCheckout().equals(checkout.get())){
                    COProduct.setProduct(null);
                    checkoutProductRepository.delete(COProduct);
                }
            }
        }
        return "Xoa thanh cong";
    }
    @Override
    public String deleteCProductbyProductID(Long id){
        //Tìm thông tin product theo id được truyền vào
        Optional<Product> product = productRepository.findById(id);

        if(product.isPresent()){
            List<CheckoutProduct> checkoutProducts = checkoutProductRepository.findAll();
            for(CheckoutProduct COProduct : checkoutProducts){
                //So sánh tất cả các giá trị trong table chekout_product(product) với product đã get được
                if(COProduct.getProduct().equals(product.get())){
                    //Hủy liên kết khóa ngoại để tránh lỗi
                    COProduct.setCheckout(null);
                    //Xóa giá trị tìm được trong table checkout_product
                    checkoutProductRepository.delete(COProduct);
                }
            }        }
        return "Xoa thanh cong";
    }

}
