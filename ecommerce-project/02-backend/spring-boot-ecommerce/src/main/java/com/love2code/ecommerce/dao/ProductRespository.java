package com.love2code.ecommerce.dao;

import com.love2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRespository extends JpaRepository<Product, Long>{
}
