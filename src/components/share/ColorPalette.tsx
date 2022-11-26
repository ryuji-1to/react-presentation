const ColorBall = (props: { className?: string; color: string }) => {
  return (
    <div className={`absolute -top-[48px] origin-bottom h-[298px] transition-opacity duration-1000 ${props.className}`}>
      <span
        style={{
          backgroundColor: props.color
        }}
        className={`w-24 h-24 rounded-full inline-block ${props.className}`}
      />
    </div>
  );
};

export const Yellow = (props: { className?: string }) => {
  return <ColorBall color="#fffd34" className={props.className} />;
};
export const YellowOrange = (props: { className?: string }) => {
  return <ColorBall color="#fabc05" className={props.className} />;
};
export const Orange = (props: { className?: string }) => {
  return <ColorBall color="#fb9a02" className={props.className} />;
};
export const RedOrange = (props: { className?: string }) => {
  return <ColorBall color="#fe530b" className={props.className} />;
};
export const Red = (props: { className?: string }) => {
  return <ColorBall color="#fd2713" className={props.className} />;
};
export const RedViolet = (props: { className?: string }) => {
  return <ColorBall color="#a8194a" className={props.className} />;
};
export const Violet = (props: { className?: string }) => {
  return <ColorBall color="#8702b0" className={props.className} />;
};
export const BlueViolet = (props: { className?: string }) => {
  return <ColorBall color="#3e00a7" className={props.className} />;
};
export const Blue = (props: { className?: string }) => {
  return <ColorBall color="#0346fd" className={props.className} />;
};
export const BlueGreen = (props: { className?: string }) => {
  return <ColorBall color="#0692ce" className={props.className} />;
};
export const Green = (props: { className?: string }) => {
  return <ColorBall color="#65b030" className={props.className} />;
};
export const YellowGreen = (props: { className?: string }) => {
  return <ColorBall color="#d2eb2d" className={props.className} />;
};
