import React, { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography
} from "@mui/material";
import "../styles/signin.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!dob) {
      errors.dob = "Date of Birth is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setSuccessMessage("Sign in successful!");
      console.log("Submitting form...");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="signInRoot">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="signInForm" noValidate onSubmit={handleSubmit}>
          <TextField
            className="signInInput"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            className="signInInput"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            className="signInInput"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password ? true : false}
            helperText={errors.password}
          />
          <TextField
            className="signInInput"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dob"
            label="Date of Birth"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            error={errors.dob ? true : false}
            helperText={errors.dob}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="signInButton"
          >
            Sign In
          </Button>
          {successMessage && (
            <Typography variant="body1" color="primary">
              {successMessage}
            </Typography>
          )}
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
