import { SxProps, Theme, TypographyProps } from "@mui/material";

export interface IStyleProps {
  [x: string]: SxProps<Theme>;
}

export interface ObjectMultiLanguageProps {
  [x: string]: string;
}

export interface KeyAbleProps {
  [key: string]: unknown;
}
