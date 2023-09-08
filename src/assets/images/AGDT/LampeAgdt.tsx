import LampeAGDTImg from './lampe-AGDT.jpg';

interface LampeAgdtProps {
  customClass?: string;
  customClassImg?: string;
}

export function LampeAgdt(props: LampeAgdtProps) {
  const { customClass, customClassImg } = props;

  return (
    <div className={customClass}>
      <img className={customClassImg} src={LampeAGDTImg} alt="lampe-AGDT" />
    </div>
  );
}
