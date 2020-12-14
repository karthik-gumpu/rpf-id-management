import React, { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Card, CardContent, Grid, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  header: {
    height: 160,
  },
  profilePic: {
    width: "32%",
    height: 160,
    float: "left",
  },
});

const user1 = {
  name: "Karthik Gumpu",
  dob: "10/07/1995",
  designation: "Sub-Inspector",
  uinNo: "SCR19000263",
  pfNo: "241-57826239",
  posting: "IPF / Vijayawada (Post)",
  address: "H-No: 192-2, Tampa, Hiramandalam, Srikakulam(Dt), AP, 532214",
  contact: "7382097452",
  bloodGroup: "B+",
  idMark: "A mole on right arm",
};

function printDiv() {
  var divContents = document.getElementById("printArea").innerHTML;
  console.log("div contents", divContents);
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html>");
  a.document.write("<body > <h1>Div contents are <br>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}

function printWindow() {
  window.print();
}
const IDCardFrontView = ({ user }) => {
  const classes = useStyles();
  return (
    <Card id="printArea">
      <CardMedia
        className={classes.header}
        image="id-header.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <CardMedia
          className={classes.profilePic}
          image={user.avatar}
          title="Contemplative Reptile"
        />
        <Grid item>
          <table style={{ paddingLeft: 35 }}>
            <tr>
              <td className="heading">Name</td>
              <td>: {user.name}</td>
            </tr>
            <tr>
              <td className="heading">designation</td>
              <td>: {user.designation}</td>
            </tr>
            <tr>
              <td className="heading">P.O.P</td>
              <td>: {user.posting}</td>
            </tr>
            <tr>
              <td className="heading">Date Of Birth</td>
              <td>: {user.dob}</td>
            </tr>
            <tr>
              <td className="heading">UIN NO</td>
              <td>: {user.uinNo}</td>
            </tr>
            <tr>
              <td className="heading">PF NO</td>
              <td>: {user.pfNo}</td>
            </tr>
          </table>
        </Grid>
      </CardContent>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", float: "left", paddingLeft: 50 }}>
          Signature
        </div>
        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          Sr DSC/BZA <br />
          <i>Issuing Officer</i>
        </div>
      </div>
    </Card>
  );
};
const IDCardRearView = ({ user }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <div style={{ textAlign: "center" }}>
          <h4> RESINDENTIAL ADDRESS </h4>
          {user.address}
        </div>
        <hr />
        <Grid item>
          <table style={{ marginLeft: "auto", marginRight: "auto" }}>
            <tr>
              <td className="heading">Mob.No</td>
              <td>: {user.contact}</td>
            </tr>
            <tr>
              <td className="heading">Blood Group</td>
              <td>: {user.bloodGroup}</td>
            </tr>
            <tr>
              <td className="heading">ID Mark</td>
              <td>: {user.idMark}</td>
            </tr>
            <tr>
              <td className="heading">Valid Upto</td>
              <td>: 2025</td>
            </tr>
          </table>
        </Grid>
        <hr />
        <div style={{ textAlign: "center" }}>
          <h4> INSTRUCTIONS </h4>
          Please surrender on transfer / retirement <br />
          if found return to nearest Police station or Office
        </div>
      </CardContent>
    </Card>
  );
};
const CardPreview = ({ selectedUser, setScreen }) => {
  const printAreRef = createRef();

  return (
    <Grid container>
      <Grid item md="2"></Grid>
      <Grid item md="8" xs="12">
        <IDCardFrontView ref={printAreRef} user={selectedUser} />
        <br />
        <IDCardRearView user={selectedUser} />
        <br />
        <Button
          onClick={() => setScreen("users")}
          variant="outlined"
          color="primary"
        >
          All Users
        </Button>
        &nbsp;
        <Button
          onClick={() => setScreen("register")}
          variant="outlined"
          color="primary"
        >
          Register
        </Button>
        &nbsp;
        <Button onClick={printWindow} variant="contained" color="primary">
          Print
        </Button>
      </Grid>
    </Grid>
  );
};

export default CardPreview;
