import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "inline-block",
  },
  img: {
    display: "block",
    borderRadius: "50%",
  },
}));

export type AvatarProps = {
  src: string;
  size?: number;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "children">;

export const Avatar: React.VFC<AvatarProps> = ({
  src,
  size = 20,
  ...imgProps
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={src}
        className={classes.img}
        width={size}
        height={size}
        alt={imgProps.alt} // Explicit assignment to keep eslint happy
        {...imgProps}
      />
    </div>
  );
};
