import { ReactElement } from "react";

const Container = (props: {
  heigth: number;
  width: number;
  children: ReactElement;
}) => {
  return (
    <div
      className="container"
      style={{ height: props.heigth, width: props.width }}
    >
      {props.children}
    </div>
  );
};

export default Container;
