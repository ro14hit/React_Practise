import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";

const AddUser = () => {
  const submitFun = (e) => {
    e.preventDefault();
    console.log("submit fun clicked");
  };

  return (
    <div className="flex flex-wrap justify-center m-16 items-center h-60">
      <form onSubmit={submitFun}>
        <Box className="border mt-10 rounded-md border-black p-4 flex flex-col">
          <Typography
            textAlign={"center"}
            variant="h6"
            padding={2}
            className="text-red-500"
          >
            Add User Form
          </Typography>
          <Grid container spacing={2} className="mb-5">
            <Grid item xs={6}>
              <TextField
                required
                label="First Name"
                autoComplete="off"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Middle Name"
                autoComplete="off"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <TextField
                required
                label="Last Name"
                autoComplete="off"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <TextField
                required
                label="Gender"
                autoComplete="off"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <div className="flex justify-center">
            <Button type="submit" className="" variant="contained">
              Submit
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default AddUser;
