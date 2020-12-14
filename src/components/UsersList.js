import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import UserRow from "./UserRow";
import {
  Button,
  Card,
  CardContent,
  Grid,
  CardMedia,
  CardActions,
} from "@material-ui/core";
const columns = [
  { headerName: "Name", dataIndex: "name" },
  { headerName: "ID NO", dataIndex: "idNo" },
  { headerName: "UIN NO", dataIndex: "uinNo" },
  { headerName: "Designation", dataIndex: "designation" },
  { headerName: "P.O.P", dataIndex: "posting" },
  { headerName: "Phone No", dataIndex: "contact" },
];
function UsersList({ users, setScreen, handlePreview }) {
  return (
    <Card>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.dataIndex}>
                  <strong>{col.headerName}</strong>
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UserRow
                index={index}
                key={index}
                user={user}
                columns={columns}
                handlePreview={handlePreview}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions>
        <Button
          onClick={() => setScreen("rgister")}
          variant="outlined"
          color="primary"
        >
          Register
        </Button>
      </CardActions>
    </Card>
  );
}

export default UsersList;
