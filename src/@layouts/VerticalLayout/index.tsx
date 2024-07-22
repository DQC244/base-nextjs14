// React Imports
import type { ReactNode } from "react";

// Type Imports
import type { ChildrenType } from "@core/types";

// Component Imports
import LayoutContent from "./LayoutContent";

// Util Imports

type VerticalLayoutProps = ChildrenType & {
  navigation?: ReactNode;
  navbar?: ReactNode;
  footer?: ReactNode;
};

const VerticalLayout = (props: VerticalLayoutProps) => {
  // Props
  const { navbar, footer, navigation, children } = props;

  return (
    <div>
      {navigation || null}
      <div>
        {navbar || null}
        {/* Content */}
        <LayoutContent>{children}</LayoutContent>
        {footer || null}
      </div>
    </div>
  );
};

export default VerticalLayout;
