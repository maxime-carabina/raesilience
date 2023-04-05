import './home.scss';

import Header from '../../components/Header/Header';

import albumCharlet from '../../assets/img/Cassette-Charlet.png';
import raesilienceLogo from '../../assets/img/raesilience-logo.png';
import raesilienceLogoBlack from '../../assets/img/raesilience-logo-noir.png';
import coverCordesSensibles from '../../assets/img/COVER-CORDES SENSIBLES.jpg';
import imgAuGréDuTemps from '../../assets/img/Au-gré-du-temps.jpg';
import imgStayNoirTShirt from '../../assets/img/imgStayNoirTshirt.jpg';

export default function Home() {
  // window.addEventListener('scroll', () => {
  //   const topic = document.getElementById('topic');

  //   if (topic) {
  //     // window.scrollY < 20
  //     //   ? (topic.style.visibility = 'hidden')
  //     //   : (topic.style.visibility = 'visible');
  //     if (window.scrollY < 10) {
  //       topic.style.visibility = 'hidden';
  //       topic.classList.remove('lineUp');
  //     } else {
  //       topic.style.visibility = 'visible';
  //       topic.classList.add('lineUp');
  //     }
  //   }
  // });

  return (
    <div className="Home">
      {/* <div style={{ padding: '24px' }}> */}
      <div>
        <Header logoVisible={false} />

        <div className="Hero-banner">
          <div className="center-album">
            <img alt="albumCharlet" src={albumCharlet} />
          </div>
          <div className="container centered-axis-xy">
            <div className="left lineUp" id="topic">
              <h3>DA indépendant situé à Paris</h3>
              <h1>Je réalise des projets de direction artistique, design & photographie</h1>
            </div>
            <div className="right">
              <img alt="" src={raesilienceLogo} />
            </div>
          </div>
          <div className="container-info-scroll">
            <h4>SCROLL</h4>
            <div className="container-date">
              <h4>{'//'}</h4>
              <h4>2022</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-overview">
        <div className="project" style={{ marginBottom: '1rem' }}>
          <div className="project-info">
            <div>
              <h1>Cordes sen-sibles //</h1>
              <p>
                Cover Ep // Charlet <span>Design+</span>
              </p>
            </div>
          </div>
          <div className="project-img">
            <div>
              <img src={coverCordesSensibles} alt="cordes-sensible" />
            </div>
          </div>
        </div>

        <div className="project" style={{ marginBottom: '1rem' }}>
          <div className="project-info">
            <div>
              <h1>Au Gré Du Temps //</h1>
              <p>
                Au Gré Du Temps <span>Photographie</span>
              </p>
            </div>
          </div>
          <div className="project-img">
            <div>
              <img src={imgAuGréDuTemps} alt="au-gré-du-temps" />
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div>
              <h1>Stay Noir //</h1>
              <p>
                Streetwear <br />
                <span>Da</span>
              </p>
            </div>
          </div>
          <div className="project-img">
            <div>
              <img src={imgStayNoirTShirt} alt="stay-noir-tshirt" />
            </div>
          </div>
        </div>
      </div>

      <div className="coming-soon">
        <div className="coming-soon__title">
          <h1>Regarder tous les projets</h1>
          <h1>{'//'}2022</h1>
        </div>

        <div className="spinning__title">
          <div className="title">
            <span>RÆsilience</span>
            <span>RÆsilience</span>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          </p>
        </div>

        <div className="categories">
          <p className="categories__title">Staynoir</p>

          <div className="categories-container">
            <ul>
              <li>
                <a href="#">Vetements</a>
              </li>
              <li>
                <a href="#">Streetwear</a>
              </li>
              <li>
                <a href="#">Bientôt</a>
              </li>
              <li>
                <a href="#">Dispo-</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="contact-header">
          <ul>
            <li>
              <img
                className="raesilience-logo-black"
                src={raesilienceLogoBlack}
                alt="raesilience-logo-black"
              />
            </li>
            <li>
              <p>
                Envie que l'on
                <br /> travail ensemble ?
              </p>
            </li>
            <li>
              <p>
                Envoyer moi
                <br /> un message
              </p>
            </li>
          </ul>
        </div>

        <h1 className="contact-email">
          Raesilience.stud
          <br />
          @gmail.com
        </h1>

        <div className="social-media-container">
          <div className="social-media__links">
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Behance</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
          <p className="social-media__description">
            Retrouvez-moi sur ces réseaux sociaux,
            <br />
            vous pouvez également me contacter par message directement !
          </p>
        </div>

        <p className="jobs">da - designer - photographe - créateur de contenu</p>
      </div>
    </div>
  );
}
