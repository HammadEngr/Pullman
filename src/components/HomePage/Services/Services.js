import React from "react";
import styles from "./Services.module.css";
import ServicesDisplay from "../../Reuseables/ServicesDisplay";
import paymentIcon from "../../../images/icons/payment.png";
import deliveryIcon from "../../../images/icons/worldwide-shipping.png";
import likeIcon from "../../../images/icons/like.png";
import helpIcon from "../../../images/icons/customer-service.png";
const services = [
  {
    service: "Great Value",
    icon: likeIcon,
    description: "Nunc id ante quis tellus faucibus dictum in eget metus.",
  },
  {
    service: "Worldwide Delivery",
    icon: deliveryIcon,
    description: "Nunc id ante quis tellus faucibus dictum in eget metus.",
  },
  {
    service: "Safe Payment",
    icon: paymentIcon,
    description: "Nunc id ante quis tellus faucibus dictum in eget metus.",
  },
  {
    service: "24/7 Help",
    icon: helpIcon,
    description: "Nunc id ante quis tellus faucibus dictum in eget metus.",
  },
];
const Services = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      {services.map((s, i) => (
        <ServicesDisplay data={s} key={`${Math.random()}SERVICES${i}`} />
      ))}
    </div>
  );
};

export default Services;
