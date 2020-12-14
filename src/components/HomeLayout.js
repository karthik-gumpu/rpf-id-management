import React from "react";
import Register from "./Register";
import { Grid } from "@material-ui/core";
import CardPreview from "./CardPreview";
import UsersList from "./UsersList";

function Homelayout({ screen, ...props }) {
  return (
    <Grid container>
      <Grid item md="2"></Grid>
      <Grid item md="8" xs="12">
        {(() => {
          if (screen === "register") {
            return <Register {...props} />;
          }
          if (screen === "preview") {
            return <CardPreview {...props} />;
          }
          if (screen === "users") {
            return <UsersList {...props} />;
          }
          return null;
        })()}
      </Grid>
    </Grid>
  );
}

export default Homelayout;
