package com.laith.ProductCategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.laith.ProductCategories.models.Category;
import com.laith.ProductCategories.models.Product;

@Repository
public interface CategoryRepo extends CrudRepository<Category,Long> {
	List<Category> findAll();
	List<Category> findByProductsNotContains(Product product);
	
}
