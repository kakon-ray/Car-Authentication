import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useServices();

  return (
    <div className="container-fluid">
      <h1 className="services-title">Khulna Car Service</h1>
      <div className="services-container">
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
