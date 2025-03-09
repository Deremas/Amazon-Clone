import React from "react";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Auth from "./pages/Auth/Auth";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51QxtCKHbnYrZjPOMRb9Oowkzc4nKJ7hptE4HIVGEDL4oVdsztv1GWWFEhXbkzFOmmn6qCazJygEnxawIr4GunjJU00DvQb7oMj"
);

function Router() {
  return (
    <>
      <BrowserRouter basename="/Amazon-Clone">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/signin" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/payments"
            element={
              <ProtectedRoute
                msg={"You must login to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"You must need to Sign in to access your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;

// import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
// const Cart = lazy(() => import("./pages/Cart/Cart"));
// const Payment = lazy(() => import("./pages/Payment/Payment"));
// const Orders = lazy(() => import("./pages/Orders/Orders"));
// const Auth = lazy(() => import("./pages/Auth/Auth"));
// const Results = lazy(() => import("./pages/Results/Results"));
// const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));

// const stripePromise = loadStripe(
//   "pk_test_51QxtCKHbnYrZjPOMRb9Oowkzc4nKJ7hptE4HIVGEDL4oVdsztv1GWWFEhXbkzFOmmn6qCazJygEnxawIr4GunjJU00DvQb7oMj"
// );

// function Router() {
//   return (
//     <BrowserRouter basename="/Amazon-Clone">
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/auth/signin" element={<Auth />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route
//             path="/payments"
//             element={
//               <ProtectedRoute
//                 msg={"You must login to pay"}
//                 redirect={"/payments"}
//               >
//                 <Elements stripe={stripePromise}>
//                   <Payment />
//                 </Elements>
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/orders"
//             element={
//               <ProtectedRoute
//                 msg={"You must need to Sign in to access your orders"}
//                 redirect={"/orders"}
//               >
//                 <Orders />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/category/:categoryName" element={<Results />} />
//           <Route path="/product/:productId" element={<ProductDetail />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default Router;
