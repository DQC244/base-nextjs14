import { Button, Stack, TextField } from "@mui/material";
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
        <TextField required label="name"></TextField>
        <TextField label="name" variant="standard"></TextField>
        <TextField label="name" variant="filled"></TextField>
      </Stack>
    </Stack>
  );
};

export default page;
