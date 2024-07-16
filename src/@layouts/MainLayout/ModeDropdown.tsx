"use client";

// React Imports
import { useRef, useState } from "react";

// MUI Imports
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

// Hook Imports
import { useSettings } from "@core/hooks/useSettings";
import { CloseIcon } from "@components/icons";

const ModeDropdown = () => {
  // States
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null);

  // Hooks
  const { settings, handleUpdateSettings } = useSettings();

  const handleToggle = () => {
    if (settings.mode === "dark") {
      handleUpdateSettings({ mode: "light" });
    }

    if (settings.mode === "light") {
      handleUpdateSettings({ mode: "dark" });
    }
  };

  const getModeIcon = () => {
    if (settings.mode === "dark") {
      return "ri-moon-clear-line";
    } else {
      return "ri-sun-line";
    }
  };

  return (
    <>
      <Tooltip
        title={settings.mode + " Mode"}
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={tooltipOpen}
        PopperProps={{ className: "capitalize" }}
      >
        <IconButton
          ref={anchorRef}
          onClick={handleToggle}
          className="text-textPrimary"
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ModeDropdown;
