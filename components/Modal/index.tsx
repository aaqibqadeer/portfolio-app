export const Modal = ({ children, onClose }) => {
  return (
    <div className="services__modal active-modal">
      <div className="services__modal-content">
        {children[0]}
        <i
          className="uil uil-times services__modal-close"
          onClick={onClose}
        ></i>
        {children[1]}
      </div>
    </div>
  );
};
