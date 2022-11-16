package com.laith.ProductCategories.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.laith.ProductCategories.models.CategoryProduct;

@Repository
public interface CategoryProductRepo extends CrudRepository<CategoryProduct,Long>{

}
