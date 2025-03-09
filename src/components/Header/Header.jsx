import React, { useContext } from "react";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  return (
    <>
      <section className={styles.sticky}>
        <section className={styles.container}>
          <div className={styles.logo_container}>
            <Link className={styles.logo} to="/">
              <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Product" />
            <BsSearch size={39} />
          </div>
          <div className={styles.order__container}>
            <div className={styles.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="us logo"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>
            {/* to="/auth/signin" */}
            <Link to={!user && "/auth/signin"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            <Link className={styles.order} to="/orders">
              <p>returns</p>
              <span>&amp; Orders</span>
            </Link>
            <Link className={styles.cart} to="/cart">
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
