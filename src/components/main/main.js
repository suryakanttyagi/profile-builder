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
          <div className='detail-card d-flex'>
            <CardBadge/>
          </div>
          <div className='service-card'>
            <h2>My Services</h2>
            <div className='service-list d-flex'>
              <CardService/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
