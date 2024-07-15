import { Avatar, AvatarProps } from "@mui/material";
import { memo } from "react";

const AppAvatar = ({ name, sx, ...otherProps }: AppAvatarProps) => {
  return (
    <Avatar {...otherProps} {...(name && { ...stringAvatar(name, sx) })} />
  );
};

export default memo(AppAvatar);

const takeFirstCharacterName = (str) => {
  if (str) {
    const name = str.trim().split(" ");
    const firstName = name[name.length - 1];
    return firstName[0]?.toUpperCase();
  }
};

const stringAvatar = (name: string, sx?) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      ...sx,
    },
    children: takeFirstCharacterName(name),
  };
};

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

type AppAvatarProps = AvatarProps & {
  name?: string;
};
