import { Button, Stack } from "@mui/material";
import { AppTextField } from "@root/components/common";
import React from "react";

const page = () => {
  return (
    <Stack spacing={8} style={{ padding: "60px 24px" }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">primary</Button>
        <Button variant="outlined">primary</Button>
        <Button variant="text">primary</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AppTextField required label="name"></AppTextField>
        <AppTextField label="name" variant="standard"></AppTextField>
        <AppTextField label="name" variant="filled"></AppTextField>
      </Stack>
    </Stack>
  );
};

export default page;
