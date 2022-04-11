import React, { useEffect, useState } from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();

  console.log(services);
  return (
    <div>
      {services?.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
