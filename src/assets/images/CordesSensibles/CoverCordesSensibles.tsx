import CoverCordesSensiblesImg from './cover-cordes-sensibles.jpg';

export function CoverCordesSensibles({ ...props }) {
  return (
    <div {...props}>
      <img src={CoverCordesSensiblesImg} alt="cover-cordes-sensibles" />
    </div>
  );
}
