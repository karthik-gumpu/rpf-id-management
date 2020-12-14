import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="header card"
      spacing={2}
      style={{ padding: 10 }}
    >
      <Grid item xs={4}>
        <div
          className="logo-container"
          style={{ fontSize: 16, fontWeight: "bold" }}
        >
          RPF PGT
        </div>
      </Grid>

      <Grid container justify="center" alignItems="center" item xs={8}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} style={{ textAlign: "end" }}>
          <div className="menubar">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Dileep
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>

              <MenuItem onClick={handleMenuClose}>My account</MenuItem>

              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
