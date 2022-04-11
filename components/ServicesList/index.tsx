export const ServicesList = ({ list }: { list: string[] }) => {
  return (
    <ul className="services__modal-services grid">
      {list?.map((item) => (
        <li className="services__modal-service" key={item}>
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};
