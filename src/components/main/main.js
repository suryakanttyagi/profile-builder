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
          <div className="contact-main">
            <h2>Contact information</h2>
            <div className="contact-info">
              <div className="card">
                <div className="d-flex justify-between">
                  <p>Country:</p>
                  <span className="d-flex">
                    <img src="../india-96.png" width={20} alt="Indian Flag" />
                    <span>India</span>
                  </span>
                </div>
                <div className="d-flex justify-between">
                  <p>State:</p> <span>Madhya Pradesh</span>
                </div>
                <div className="d-flex justify-between">
                  <p>City:</p> <span>Gwalior</span>
                </div>
                <div className="d-flex justify-between">
                  <p>Street:</p>
                  <span>31 Ramanuj Nagar, City Center</span>
                </div>
              </div>
              <div className="card">
                <div className="d-flex justify-between">
                  <p>Mail:</p>
                  <div className="d-flex">
                    <img src="./gmail-400.png" alt="gmail" width={20} />
                    <span>suryakant28.st@gmail.com</span>
                  </div>
                </div>
                <div className="d-flex justify-between">
                  <p>Mobile:</p> <span>+91 7089272128</span>
                </div>
                <div className="d-flex justify-between">
                  <p>Skype:</p>
                  <div className="d-flex">
                    <img src="./skype.gif" alt="skype" width={20} />
                    <span>suryakant28.st</span>
                  </div>
                </div>
                <div className="d-flex justify-between">
                  <p>Telegram:</p>
                  <div className="d-flex">
                    <img src="./telegram.gif" alt="telegram" width={20} />
                    <span>@suryakantt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
