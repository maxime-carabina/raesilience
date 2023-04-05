import './Header.scss';
import { useNavigate } from 'react-router-dom';

import raesilienceLogoBlack from '../../assets/img/raesilience-logo-noir.png';

interface Props {
  logoVisible: boolean;
  color?: string;
}

const Links = ({ color }: { color: string | undefined }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ul style={{ color: color }}>
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
      <div className="dot" style={{ backgroundColor: color }}>
        <a></a>
      </div>
    </div>
  );
};

function Header({ logoVisible, color }: Props) {
  const navigate = useNavigate();

  return logoVisible ? (
    <div className="Header" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <img
        className="rae-logo-black"
        src={raesilienceLogoBlack}
        alt="rae-logo-black"
        onClick={() => navigate('/')}
      />
      <Links color={color} />
    </div>
  ) : (
    <div className="Header" style={{ justifyContent: 'flex-end' }}>
      <Links color={color} />
    </div>
  );
}

export default Header;
