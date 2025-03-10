import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./Results.module.css"
import { useParams} from "react-router-dom"
import {productUrl} from "../../Api/endPoint"
import Loader from "../../components/Loader/Loader"
import LayOut from "../../components/LayOut/LayOut"
import ProductCard from "../../components/Product/ProductCard"

function Results() {
  const[results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();


  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        let request = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );
        console.log(request);
        setResults(request.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <LayOut>
        <section className={styles.results__container}>
          <h1 style={{ padding: "2rem" }}>Results</h1>
          <p style={{ padding: "2rem" }}>Category / {categoryName}</p>
          <hr />
          {isLoading ? (
            <Loader />
          ) : (
            <div className={styles.products__container}>
              {results?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderAdd={true}
                />
              ))}
            </div>
          )}
        </section>
      </LayOut>
    </>
  );
}

export default Results