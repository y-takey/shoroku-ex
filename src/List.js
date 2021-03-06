import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import AddIcon from "material-ui-icons/Add";
import EditIcon from "material-ui-icons/Edit";
import DashboardIcon from "material-ui-icons/Dashboard";

import TopBar from "./TopBar";
import LinkButton from "./LinkButton";

const data = require("./data.json");

class List extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div style={{ padding: 10 }}>
          <LinkButton label="新規追加" icon={<AddIcon />} to="/" />
          <Paper style={{ marginTop: 10 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>学会</TableCell>
                  <TableCell>タイトル / メインテーマ</TableCell>
                  <TableCell>会期</TableCell>
                  <TableCell>会場</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody>
                {data.events.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.event}</TableCell>
                      <TableCell>{n.title}</TableCell>
                      <TableCell>{n.term}</TableCell>
                      <TableCell>{n.location}</TableCell>
                      <TableCell>
                        <LinkButton label="編集" icon={<EditIcon />} to={`/${n.id}/manage`} />
                        &nbsp;&nbsp;
                        <LinkButton label="アプリ" icon={<DashboardIcon />} to={`/${n.id}/app`} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default List;
