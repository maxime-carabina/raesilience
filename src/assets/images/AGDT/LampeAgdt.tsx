import LampeAGDTImg from './lampe-AGDT.jpg';

export function LampeAgdt({ ...props }) {
  return (
    <div {...props}>
      <img src={LampeAGDTImg} alt="lampe-AGDT" />
    </div>
  );
}
