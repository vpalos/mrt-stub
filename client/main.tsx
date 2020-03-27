import { Meteor } from "meteor/meteor";

import React from "react";
import { render } from "react-dom";

import "/imports/i18n";

import Router from "/imports/router";
import Theme from "/imports/ui/components/Theme";

Meteor.startup(() => {
  render(
    <Theme>
      <Router />
    </Theme>,
    document.getElementById("react-root")
  );
});
