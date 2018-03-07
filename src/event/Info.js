import React, { Component } from "react";
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const Info = props => {
  const { info } = props.data;
  return (
    <div style={{ flexGrow: 1 }}>
      {info.map((rec, i) => {
        return (
          <ExpansionPanel key={`info-${i}`}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ fontWeight: "bold" }}>{rec.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{rec.note}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default Info;
