import React, { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    console.log(name + "name");
    console.log(email + "email");
  };

  return (
    <div>
      <h1>About</h1>
      <form onSubmit={handleSubmit}>
        <Grid>
        <TextField
          id="standard-basic"
          name="name"
          value={name}
          label="Name"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
        </Grid>
        <Grid>
        <TextField
          id="standard-basic"
          variant="standard"
          type="email"
          name="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        </Grid>
        <Button
          type="submit"
          onClick={() => {
            alert("clicked");
          }}
          variant="contained"
          color="secondary"
          size="small"
        >
          Save
        </Button>
      </form>
      {status ? "status" : ""}
      {status && <p>This content is visible</p>}
    </div>
  );
}

export default About;
