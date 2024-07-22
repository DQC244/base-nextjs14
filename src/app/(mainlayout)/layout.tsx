import Navigation from "@components/layout/Navigation";
import LayoutWrapper from "@layouts/LayoutWrapper";
import VerticalLayout from "@layouts/VerticalLayout";
import React from "react";

const layout = ({ children }) => {
  return (
    <LayoutWrapper
      verticalLayout={
        <VerticalLayout
          navigation={<Navigation />}
          // navbar={<Navbar />}
          // footer={<VerticalFooter />}
        >
          {children}
        </VerticalLayout>
      }
    />
  );
};

export default layout;
