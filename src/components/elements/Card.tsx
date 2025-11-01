import React from "react";

type Props = {
    children: React.ReactNode;
    height?: string
};

const Card = (props: Props) => {
  return (
    <div className={`${props.height} card bg-card w-auto shadow-sm rounded-none border border-main/20 hover:border-main/40 hover:shadow-[0_2px_20px]  hover:shadow-main/45 transition-all ease-in-out duration-500 cursor-default`}>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
