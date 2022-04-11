import { Modal } from "../Modal";
import { Title } from "../Modal/Title";
import { ServicesList } from "../ServicesList";

export const ServicesItem = ({
  title,
  servicesList,
  modalHeading,
  icon,
  showModal,
  onClose,
  onClick,
}) => {
  return (
    <div className="services__content">
      <div>
        {icon}
        <h3
          className="services__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <span
        className="button button--flex button--small button--link services__button"
        onClick={onClick}
      >
        View More
        <i className="uil uil-arrow-right button__icon"></i>
      </span>

      {showModal && (
        <Modal onClose={onClose}>
          <Title heading={modalHeading} />
          <ServicesList list={servicesList} />
        </Modal>
      )}
    </div>
  );
};
