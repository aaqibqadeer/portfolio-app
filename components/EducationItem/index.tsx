import { FC } from "react";

interface Props {
  degree: string;
  institute: string;
  date: string;
  alignLeft: boolean;
  lastItem?: boolean;
}

const GraphLine = ({
  lastItem,
  alignLeft,
}: {
  lastItem: boolean;
  alignLeft: boolean;
}) => (
  <>
    {!alignLeft && <div></div>}
    <div>
      <span className="qualification__rounder"></span>
      {!lastItem && <span className="qualification__line"></span>}
    </div>
  </>
);

export const EducationItem: FC<Props> = ({
  degree,
  institute,
  date,
  alignLeft,
  lastItem = false,
}) => {
  return (
    <div className="qualification__data">
      {alignLeft ? null : (
        <GraphLine lastItem={lastItem} alignLeft={alignLeft} />
      )}
      <div>
        <h3 className="qualification__title">{degree}</h3>
        <span className="qualification__subtitle">{institute}</span>
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt"></i>
          {date}
        </div>
      </div>

      {alignLeft ? (
        <GraphLine lastItem={lastItem} alignLeft={alignLeft} />
      ) : null}
    </div>
  );
};
