import React from "react";
import styles from "./Category.module.css";
import { categoryImage } from "./categoryInfo";
import CategoryCard from "./CategoryCard";
function Category() {
  return (
    <>
      <section className={`${styles.category__container}`}>
        {categoryImage?.map((info, index) => (
          <CategoryCard key={index} data={info} />
        ))}
      </section>
    </>
  );
}

export default Category;
