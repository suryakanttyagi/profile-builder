import "./main.scss";
import SkillBadge from "../skill-badge/skillBadge";
import Experience from "../experience/experience";
import { skillList } from "../../constants/navConstants";

function Main() {
  return (
    <main className="main">
      <div className="card">
        <div className="card-head">
          <div className="profile-background">
            <div className="cover"></div>
          </div>
          <div className="skill-main">
            <h2>My Skills</h2>
            <div className="skill-list d-flex justify-start flex-wrap">
              {skillList.map((item, index) => {
                return (
                  <SkillBadge
                    key={`${index}_label`}
                    title={item.title}
                    subTitleImage={item.subTitleImage}
                    label={item.label}
                  />
                );
              })}
            </div>
          </div>
          <div className="experience-main">
            <h2>My Experience</h2>
            <div className="experience-list d-flex justify-between flex-wrap">
              <Experience
                orgName="Knowledge Ops Pvt Ltd"
                duration="(JUL 2018 - NOV 2020)"
              />
              <Experience
                orgName="GlobalLogic"
                subName="(A Hitachi Group Company)"
                duration="(DEC 2020 - JUL 2022)"
              />
              <Experience orgName="Infogain" duration="(JUL 2022 - ON)" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
