import React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          email: email,
          password: password,
        }
      );

      handleLoginSuccess(response.data);
    } catch (error) {
      handleLoginError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    // Debugging statement to ensure the function is called
    console.log(
      "User data set and localStorage updated, redirecting to home page..."
    );

    navigate("/about");
  };

  const handleLoginError = (error) => {
    setError(error.response?.data?.message || "An unexpected error occurred");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <h1>Login</h1>
        <form onSubmit={login}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            {error && (
              <Grid item xs={12} md={12}>
                <p style={{ color: "red" }}>{error}</p>
              </Grid>
            )}
          </Grid>
        </form>
        <Grid item xs={12}>
          {loading && <Typography variant="h6">Loading...</Typography>}
        </Grid>
        <Grid item xs={12}>
          {user && <Typography variant="h6">Welcome {user.name}</Typography>}
          {user && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setUser(null)}
            >
              Logout
            </Button>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
