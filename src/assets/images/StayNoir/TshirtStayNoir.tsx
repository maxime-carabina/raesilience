import TshirtStayNoirImg from './t-shirt-staynoir.jpg';

export function TshirtStayNoir({ ...props }) {
  return (
    <div {...props}>
      <img src={TshirtStayNoirImg} alt="t-shirt-staynoir" />
    </div>
  );
}
