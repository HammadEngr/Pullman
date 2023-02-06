import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import BigDisplay from "../Reuseables/BigDisplay";
import { productsData } from "../../Data/InStore/ProductsData";

const DetailPage = (props) => {
  const params = useParams();
  const data = productsData.find((data) => data.productId === params.productId);

  return <BigDisplay data={data} />;
};

export default DetailPage;
