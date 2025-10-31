import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ProductList from "./tps/store/ProductList.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductList />
  </StrictMode>
);
