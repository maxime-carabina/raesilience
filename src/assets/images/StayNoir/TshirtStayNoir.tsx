import TshirtStayNoirImg from './t-shirt-staynoir.jpg';

interface TshirtStayNoirProps {
  customClass?: string;
  customClassImg?: string;
}

export function TshirtStayNoir(props: TshirtStayNoirProps) {
  const { customClass, customClassImg } = props;

  return (
    <div className={customClass}>
      <img
        className={customClassImg}
        src={TshirtStayNoirImg}
        alt="t-shirt-staynoir"
      />
    </div>
  );
}
