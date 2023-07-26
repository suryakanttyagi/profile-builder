import './main.scss';
import CardBadge from '../card-badge/cardBadge';
import CardService from '../card-service/cardService';

function Main() {
  return (
    <main className='main'>
      <div className='card'>
        <div className='card-head'>
          <div className='profile-background'>
            <div className='cover'></div>
          </div>
          <div className='detail-card d-flex justify-between'>
            <CardBadge title="5+" subTitleImage='./react-400.png'/>
            <CardBadge title="5+" subTitleImage='./javascript-400.png'/>
            <CardBadge title="2+" subTitleImage='./nodejs-400.png'/>
            <CardBadge title="5+" subTitleImage='./html5-400.png'/>
            <CardBadge title="5+" subTitleImage='./css3-400.png'/>
            <CardBadge title="5+" subTitleImage='./git-400.png'/>
          </div>
          <div className='service-card'>
            <h2>My Experience</h2>
            <div className='service-list d-flex justify-between'>
              <CardService orgName="Knowledge Ops Pvt Ltd" duration='(JUL 2018 - NOV 2020)'/>
              <CardService orgName="Globallogic" subName="(Hitachi Group Of Companies)" duration='(DEC 2020 - JUL 2022)'/>
              <CardService orgName="Infogain" duration='(JUL 2022 - ON)'/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
