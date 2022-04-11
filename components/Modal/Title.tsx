export const Title = ({ heading }: { heading: string }) => {
  return (
    <h4
      className="services__modal-title"
      dangerouslySetInnerHTML={{ __html: heading }}
    />
  );
};
