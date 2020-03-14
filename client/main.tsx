import { Meteor } from "meteor/meteor";

import React from "react";
import { render } from "react-dom";

import Router from "/imports/router";

Meteor.startup(() => {
  render(<Router />, document.getElementById("react-root"));
});
