import Banner from "../../components/Banner/banner";
import bannerIMG from "../../assets/media/bannerAbout.png";
import collapsesData from "../../assets/data/about";
import Collapse from "../../components/collapse";

const About = () => {
  return (
    <div className="about">
      <Banner imgSRC={bannerIMG} text={false} />
      <div className="collapsesContainer">
        {collapsesData.map((data, index) => {
          return (
            <Collapse
              key={`${data.id}-${index}`}
              title={data.title}
              content={data.description}
              type="string"
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
