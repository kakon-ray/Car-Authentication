import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  return (
    <div className="service">
      <img src={service.img} alt="" />
      <h1 className="service-title">{service.name}</h1>
      <h4>Price: {service.price} $</h4>
      <p className="descripttion">{service.description}</p>
    </div>
  );
};

export default Service;
