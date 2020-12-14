import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { CardContent, Button } from "@material-ui/core";

const Register = (props) => {
  const [data, setData] = useState({});
  const onChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFileChange = (e) => {
    if (e && e.target.files && e.target.files.length) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        setData((prevData) => ({
          ...prevData,
          avatar: e.target.result,
        }));
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  console.log("data", data);

  return (
    <Card>
      <CardContent>
        <TextField
          fullWidth
          label="Name"
          name="name"
          onChange={onChange}
          value={data.name}
        />
        <TextField
          fullWidth
          label="ID No"
          name="idNo"
          onChange={onChange}
          value={data.idNo}
        />
        <TextField
          fullWidth
          label="UIN No"
          name="uinNo"
          onChange={onChange}
          value={data.uinNo}
        />
        <TextField
          fullWidth
          label="PF No"
          name="pfNo"
          onChange={onChange}
          value={data.pfNo}
        />
        <TextField
          fullWidth
          label="Designation"
          name="designation"
          onChange={onChange}
          value={data.designation}
        />
        <TextField
          fullWidth
          label="P.O.P"
          name="posting"
          onChange={onChange}
          value={data.posting}
        />
        <TextField
          fullWidth
          label="D.O.B"
          name="dob"
          onChange={onChange}
          placeholder="DD.MM.YYYY"
          value={data.dob}
        />
        <TextField
          fullWidth
          label="Phone No"
          name="contact"
          onChange={onChange}
          value={data.contact}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          onChange={onChange}
          value={data.address}
        />
        <TextField
          fullWidth
          label="ID Mark"
          name="idMark"
          onChange={onChange}
          placeholder="idMark"
          value={data.idMark}
        />
        <TextField
          fullWidth
          label="Blood Grroup"
          name="bloodGroup"
          onChange={onChange}
          value={data.bloodGroup}
        />
        <br />
        <input type="file" onChange={handleFileChange} />
        <br />
        <br />
        <Button
          onClick={() => props.setScreen("users")}
          variant="outlined"
          color="primary"
        >
          All Users
        </Button>
        &nbsp;
        <Button onClick={() => setData({})} variant="outlined">
          Clear
        </Button>
        &nbsp;
        <Button
          onClick={() => props.handleSave(data)}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </CardContent>
    </Card>
  );
};

export default Register;
