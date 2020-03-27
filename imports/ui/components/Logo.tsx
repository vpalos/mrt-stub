import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Link component={RouterLink} to="/">
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
    </Link>
  );
};
