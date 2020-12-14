import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button, Card, CardContent, Grid, CardMedia } from "@material-ui/core";

export default function UserRow({ user, columns, handlePreview }) {
  return (
    <TableRow className="table-row">
      {columns.map((col) => (
        <TableCell>
          <p>{user[col.dataIndex]}</p>
        </TableCell>
      ))}
      <TableCell>
        <Button
          onClick={() => handlePreview(user)}
          variant="contained"
          color="primary"
          size="small"
        >
          Preview
        </Button>
      </TableCell>
    </TableRow>
  );
}
