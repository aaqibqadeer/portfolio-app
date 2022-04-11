import { useState } from "react";
import { ServicesItem } from "../../components/ServicesItem";
import { servicesList } from "./constant";

export const Services = () => {
  const [showModal, setShowModal] = useState("");

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i Offer</span>

      <div className="services__container container grid">
        {servicesList.map((service) => (
          <ServicesItem
            key={service.title}
            showModal={showModal === service.title}
            onClose={() => setShowModal("")}
            onClick={() => setShowModal(service.title)}
            title={service.title}
            icon={service.icon}
            modalHeading={service.modalHeading}
            servicesList={service.descriptionItems}
          />
        ))}
      </div>
    </section>
  );
};
