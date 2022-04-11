import { Footer, Header, IntroSection } from "../components";
import data from "../data/home.json";
// interface Props {
//   header: {}
// intro: {}
// footer: {}
// }

const Home = ({ pageContent }) => {
  // TODO
  // 1. Refactor Entire Code
  // 1. Refactor File Strucure
  // 1. Refactor Imports
  // 1. Refactor Scripts/Imports
  // 1. Refactor Image Files
  // 1. Refactor Javascript
  // 1. Add Routing
  // 1. Add JSON Files
  // 1. Use Static Props
  // 1. Connect with backend
  // 1. Further Changes
  return (
    <>
      <Header content={pageContent.header} />
      <main className="main">
        <IntroSection />
        {/* <AboutSection /> */}
        {/* <SkillsSection /> */}
        {/* <QualificationSection /> */}
        {/* <Services /> */}
        {/* <Portfolio /> */}
        {/* <Project /> */}
        {/* <Testimonial /> */}
        {/* <ContactMe /> */}
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      pageContent: data,
    },
  };
};

export default Home;
