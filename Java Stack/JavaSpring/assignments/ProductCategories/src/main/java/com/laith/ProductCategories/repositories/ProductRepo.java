package com.laith.ProductCategories.repositories;

import java.util.List;

import com.laith.ProductCategories.models.Category;
import com.laith.ProductCategories.models.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends CrudRepository<Product,Long> {
	List<Product> findByCategoriesNotContains(Category category);
}
