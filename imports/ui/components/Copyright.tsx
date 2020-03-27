import { Meteor } from "meteor/meteor";

import React from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import { useTranslation } from "react-i18next";

export default function Copyright() {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {t("copyright.label")}{" "}
      <Link color="inherit" href="/">
        {Meteor.settings.public.application.name}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
