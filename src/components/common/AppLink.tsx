import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import Link, { LinkProps } from "next/link";
import { forwardRef, memo, useMemo } from "react";
import { UrlObject } from "url";

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
  const { href, as, children, download, ...otherProps } = props;

  const nextRouter = useMemo(() => href || "#", [href]);

  return (
    <Link download={download} href={nextRouter} as={as} passHref={true} ref={ref}>
      <MuiLink underline="hover" {...otherProps}>
        {children}
      </MuiLink>
    </Link>
  );
});

AppLink.displayName = "AppLink";

export type AppLinkProps = Omit<LinkProps, "href"> &
  Omit<MuiLinkProps, "href"> & { href?: UrlObject | string };

export default memo(AppLink);
