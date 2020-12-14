import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Header from "./Header";
import HomeLayout from "./HomeLayout";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function MainLayout(props) {
  const classes = useStyles();
  const [screen, setScreen] = useState("register");
  const [selectedUser, setSelectedUser] = useState({});
  const [users, setUsers] = useState([]);

  const handleSave = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setSelectedUser(user);
    setScreen("preview");
  };
  const handlePreview = (user) => {
    setSelectedUser(user);
    setScreen("preview");
  };
  console.log("users", users);
  return (
    <div className="main-wrapper">
      <CssBaseline />
      {screen !== "preview" && (
        <AppBar position="fixed" className={classes.appBar}>
          <Header {...props} setScreen={setScreen} />
        </AppBar>
      )}
      <div className={classes.content}>
        <Toolbar />
        <HomeLayout
          screen={screen}
          users={users}
          handleSave={handleSave}
          selectedUser={selectedUser}
          setScreen={setScreen}
          handlePreview={handlePreview}
        />
      </div>
    </div>
  );
}
