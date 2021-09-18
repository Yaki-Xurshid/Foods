import React from "react";
import ContactWrapper from "./ContactWrapper";

import { Divider, IconButton, InputBase, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="backround">
        <p className="text3">Testimonial</p>
        <p className="text4">Making Food great again and again</p>
        <div className="d-flex forms ">
          <Paper
            component="form"
            className="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              className="textlabel"
              placeholder="Enter your message"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <Button variant="contained" color="secondary" className="button">
            Send
          </Button>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
