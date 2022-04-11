import { useState } from "react";
import { EducationItem } from "../../components/EducationItem";
import { QualificationTab } from "../../components/QualificationTab";
import { QualificationWrapper } from "./QualificationWrapper";

export const QualificationSection = () => {
  const [state, setstate] = useState("Education");
  const showEducation = state === "Education";
  const showWork = state === "Work";

  return (
    <QualificationWrapper>
      <>
        <QualificationTab
          title="Education"
          iconClassName="uil-graduation-cap"
          onClick={() => setstate("Education")}
        />
        <QualificationTab
          title="Work"
          iconClassName="uil-briefcase-alt"
          onClick={() => setstate("Work")}
        />
      </>

      <>
        {showEducation && (
          <div className="qualification__content" id="education">
            <EducationItem
              degree="Computer Science"
              institute="DHA Suffa University"
              date="2016-2020"
              alignLeft={true}
            />
            <EducationItem
              degree="Web Design"
              institute="DHA Suffa University"
              date="2016-2020"
              alignLeft={false}
              lastItem={true}
            />
          </div>
        )}

        {showWork && (
          <div className="qualification__content" id="work">
            <EducationItem
              degree="Software Engineer"
              institute="Microsoft"
              date="2018-2019"
              alignLeft={true}
            />
            <EducationItem
              degree="Software engineer intern"
              institute="DHA Suffa University"
              date="2016-2020"
              alignLeft={false}
              lastItem={true}
            />
          </div>
        )}
      </>
    </QualificationWrapper>
  );
};
