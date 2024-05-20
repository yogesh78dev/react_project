import React from "react";
import { Container, Typography, TextField, Button,Grid } from "@mui/material";

function Contact(){
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    };
    
    const classes = "";

    return(
        <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Contact us
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>   
      <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField label="Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Email" type="email" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    )
}

export default Contact;