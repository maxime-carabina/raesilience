import './Footer.scss';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="pages">
          <ul>
            <li>
              <a onClick={() => navigate('/projets')}>PROJETS</a>
            </li>
            <li>
              <a>À PROPOS</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li>
              <a>BOUTIQUE</a>
            </li>
          </ul>
        </div>

        <div className="socials">
          <ul>
            <li>
              <a>instragram</a>
            </li>
            <li>
              <a>behance</a>
            </li>
            <li>
              <a>linkedin</a>
            </li>
            <li>
              <a>twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Mention-Légales">
        <p>©2022 Raesilience / Tous droits réservés / Mentions légales</p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Designed</span> & Developed by{' '}
          <span style={{ fontWeight: 'bold' }}>Nicolas Carabina</span> & Maxime Carabina
        </p>
      </div>
    </div>
  );
}
