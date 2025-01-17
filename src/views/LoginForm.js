import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ImageListItem } from "@mui/material";
import logoJUETAENO from "../assets/logoJUETAENO.svg";
import { height } from "@mui/system";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Diseño © "}
      <Link color="inherit" href="">
        UNLaR
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "#9b0404 ",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${logoJUETAENO})`,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "block", md: "block" },

            position: "relative",
            p: { xs: 3, md: 3 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h3" color="white" gutterBottom>
            S.G.T.I.D.
          </Typography>
          <Typography variant="h7" color="white" paragraph>
            (Sistema de Gestion de <br></br>Trafico Interno de Documentos)
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingreso
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nombre de usuario"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Clave"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Typography variant="h6" align="center" gutterBottom>
              J.U.E.T.A.E.N.O
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              (Junta Única de Evaluación de Títulos y Antecedentes del Educador
              del Nivel Obligatorio)
            </Typography>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
