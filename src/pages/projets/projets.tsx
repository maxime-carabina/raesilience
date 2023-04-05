import './projets.scss';

import Footer from '../../components/Footer/Footer';

import Header from '../../components/Header/Header';
import AGDTLampe from '../../assets/img/AGDT-Lampe.jpg';
import SNTshirt from '../../assets/img/imgStayNoirTshirt.jpg';
import RaeLogo from '../../assets/img/raelogo.png';
import CharletPres from '../../assets/img/Presentation_01.png';
import DamsoCD from '../../assets/img/DamsoCD.png';
import Chanel from '../../assets/img/chanel_01.jpg';
import Herloss from '../../assets/img/herloss_projet.png';
import LCDA from '../../assets/img/le_club_des_arts.png';

export default function Projets() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Header color="#000000" logoVisible={true} />

      <div className="Projects">
        <div className="grid-container">
          <div className="div1" style={{ gridArea: 'image-1' }}>
            <img src={AGDTLampe} />
          </div>
          <div className="div2" style={{ gridArea: 'image-2' }}>
            <img src={SNTshirt} />
          </div>
          <div className="div3" style={{ gridArea: 'image-3' }}>
            <img src={RaeLogo} />
          </div>
          <div className="div4" style={{ gridArea: 'image-4' }}>
            <img src={CharletPres} />
          </div>
          <div className="div5" style={{ gridArea: 'image-5' }}>
            <img src={DamsoCD} />
          </div>
          <div className="div6" style={{ gridArea: 'image-6' }}>
            <img src={Chanel} />
          </div>
        </div>

        <div className="two-last-projects">
          <div style={{ width: '50%' }}>
            <img src={LCDA} />
          </div>
          <div style={{ width: '50%' }}>
            <img src={Herloss} />
          </div>
        </div>

        <div className="email-adress">
          <div className="email-adress-container">
            <div className="email-adress__h3">
              <p>Besoin de moi pour un projet ?</p>
            </div>
            <div className="email-adress__h1">
              <p>
                raesilience.stud
                <br />
                @gmail.com <span style={{ color: '#4D4D4D' }}>{`//`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
