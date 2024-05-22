import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = async (e) => {
    e.preventDefault(); // Prevent default form submission
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
    localStorage.setItem("userData", JSON.stringify(data));
    console.log("User Login Success..");
    navigate("/", { replace: true }); // Redirect to home page
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
              <FormControl variant="outlined" fullWidth required>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
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
      </Container>
    </div>
  );
}

export default Login;
