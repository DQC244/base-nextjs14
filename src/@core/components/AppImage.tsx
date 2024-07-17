import Image, { ImageProps } from "next/image";
import { memo } from "react";

const AppImage = (props: ImageProps) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} />;
};

export default memo(AppImage);
