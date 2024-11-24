import { openLink, classNames } from "@telegram-apps/sdk-react";
import { type FC, type MouseEventHandler, type JSX, useCallback } from "react";
import {
  type LinkProps as NextLinkProps,
  default as NextLink,
} from "next/link";

import "./styles.css";
import { useAppDispatch } from "@/lib/hooks";
import { incrementCoinsByValue } from "@/lib/features/coins/coinsSlice";

export interface LinkProps
  extends NextLinkProps,
    Omit<JSX.IntrinsicElements["a"], "href"> {}

interface MyLinkProps extends LinkProps {
  isSubscribeLink?: boolean;
}

export const Link: FC<MyLinkProps> = ({
  className,
  onClick: propsOnClick,
  href,
  isSubscribeLink,
  ...rest
}) => {
  const dispatch = useAppDispatch();
  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      propsOnClick?.(e);

      // Compute if target path is external. In this case we would like to open link using
      // TMA method.
      let path: string;
      if (typeof href === "string") {
        path = href;
      } else {
        const { search = "", pathname = "", hash = "" } = href;
        path = `${pathname}?${search}#${hash}`;
      }

      const targetUrl = new URL(path, window.location.toString());
      const currentUrl = new URL(window.location.toString());
      const isExternal =
        targetUrl.protocol !== currentUrl.protocol ||
        targetUrl.host !== currentUrl.host;

      if (isExternal) {
        e.preventDefault();
        openLink(targetUrl.toString());
        if (isSubscribeLink) {
          fetch(
            `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/subscribeTgBonus`,
            {
              method: "POST",
            }
          )
            .then((res) => res.json())
            .then((res) => dispatch(incrementCoinsByValue(res.bonus)))
            .catch((err) => console.log(err));
        }
      }
    },
    [href, propsOnClick]
  );

  return (
    <NextLink
      {...rest}
      href={href}
      onClick={onClick}
      className={classNames(className, "link")}
    />
  );
};
