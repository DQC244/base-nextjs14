// MUI Imports
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

// Third-party Imports
import PerfectScrollbar from "react-perfect-scrollbar";

// Type Imports
import type { VerticalMenuContextProps } from "@menu/components/vertical-menu/Menu";

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from "@menu/vertical-menu";

// Hook Imports
import useVerticalNav from "@menu/hooks/useVerticalNav";

// Styled Component Imports
import StyledVerticalNavExpandIcon from "@menu/styles/vertical/StyledVerticalNavExpandIcon";

// Style Imports
import menuItemStyles from "@core/styles/vertical/menuItemStyles";
import menuSectionStyles from "@core/styles/vertical/menuSectionStyles";
import { DashboardIcon } from "@components/icons";

type RenderExpandIconProps = {
  open?: boolean;
  transitionDuration?: VerticalMenuContextProps["transitionDuration"];
};

const RenderExpandIcon = ({
  open,
  transitionDuration,
}: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon
    open={open}
    transitionDuration={transitionDuration}
  >
    <i className="ri-arrow-right-s-line" />
  </StyledVerticalNavExpandIcon>
);

const VerticalMenu = ({
  scrollMenu,
}: {
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void;
}) => {
  // Hooks
  const theme = useTheme();
  const { isBreakpointReached, transitionDuration } = useVerticalNav();

  const ScrollWrapper = isBreakpointReached ? "div" : PerfectScrollbar;

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      id="top"
      {...(isBreakpointReached
        ? {
            style: {
              overflowY: "auto",
              overflowX: "hidden",
            },
            onScroll: (container) => scrollMenu(container, false),
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: (container) => scrollMenu(container, true),
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => (
          <RenderExpandIcon
            open={open}
            transitionDuration={transitionDuration}
          />
        )}
        renderExpandedMenuItemIcon={{ icon: <i className="ri-circle-line" /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        <SubMenu
          label="Dashboards"
          icon={<DashboardIcon />}
          suffix={<Chip label="5" size="small" color="error" />}
        >
          <MenuItem href="/">Analytics</MenuItem>
        </SubMenu>

        <MenuSection label="Apps & Pages">
          <MenuItem icon={<i className="ri-mail-open-line" />} target="_blank">
            Email
          </MenuItem>
          <MenuItem
            href="/account-settings"
            icon={<i className="ri-user-settings-line" />}
          >
            Account Settings
          </MenuItem>
          <SubMenu
            label="Auth Pages"
            icon={<i className="ri-shield-keyhole-line" />}
          >
            <MenuItem href="/login" target="_blank">
              Login
            </MenuItem>
            <MenuItem href="/register" target="_blank">
              Register
            </MenuItem>
            <MenuItem href="/forgot-password" target="_blank">
              Forgot Password
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Miscellaneous"
            icon={<i className="ri-question-line" />}
          >
            <MenuItem href="/error" target="_blank">
              Error
            </MenuItem>
            <MenuItem href="/under-maintenance" target="_blank">
              Under Maintenance
            </MenuItem>
          </SubMenu>
          <MenuItem
            href="/card-basic"
            icon={<i className="ri-bar-chart-box-line" />}
          >
            Cards
          </MenuItem>
        </MenuSection>
        <MenuSection label="Forms & Tables">
          <MenuItem
            href="/form-layouts"
            icon={<i className="ri-layout-4-line" />}
          >
            Form Layouts
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements`}
            icon={<i className="ri-radio-button-line" />}
            suffix={<i className="ri-external-link-line text-xl" />}
            target="_blank"
          >
            Form Elements
          </MenuItem>
        </MenuSection>
        <MenuSection label="Misc">
          <SubMenu label="Others" icon={<i className="ri-more-line" />}>
            <SubMenu label="Menu Levels">
              <MenuItem>Menu Level 2</MenuItem>
              <SubMenu label="Menu Level 2">
                <MenuItem>Menu Level 3</MenuItem>
                <MenuItem>Menu Level 3</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>Disabled Menu</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  );
};

export default VerticalMenu;
