import CoverCordesSensiblesImg from './cover-cordes-sensibles.jpg';

interface CoverCordesSensiblesProps {
  customClass?: string;
  customClassImg?: string;
}

export function CoverCordesSensibles(props: CoverCordesSensiblesProps) {
  const { customClass, customClassImg } = props;

  return (
    <div className={customClass}>
      <img
        className={customClassImg}
        src={CoverCordesSensiblesImg}
        alt="cover-cordes-sensibles"
        id="cover-cordes-sensibles"
      />
    </div>
  );
}
