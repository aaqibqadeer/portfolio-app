export const QualificationWrapper = ({
  children,
}: {
  children: React.ReactChild[];
}) => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">{children?.[0]}</div>

        <div className="qualification__sections">{children[1]}</div>
      </div>
    </section>
  );
};
