import React from "react";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { withStyles } from "@material-ui/core/styles";

/**
 * Wait for asynchronous operations before loading a page.
 *
 * <Wait for={() => new Promise(resolve => setTimeout(resolve, 2000))}>
 *   <DashboardLayout>
 *     <DashboardPage />
 *   </DashboardLayout>
 * </Wait>
 */

export interface IWaitProps<T> {
  for: () => Promise<T>;
  classes: any;
}

const styles = (theme: any) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffffff"
  }
});

class Wait<T> extends React.Component<IWaitProps<T>, {}> {
  state = {
    isLoading: true,
    isBackdropShown: false
  };

  timer: number = 0;

  constructor(p: IWaitProps<T>) {
    super(p);

    p.for().then(() => {
      window.clearTimeout(this.timer);
      this.setState({ isLoading: false });
    });
  }

  componentDidMount() {
    const { isLoading } = this.state;

    if (isLoading) {
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(
        () => this.setState({ isBackdropShown: true }),
        500
      );
    }
  }

  render() {
    const { classes, children } = this.props;
    const { isLoading, isBackdropShown } = this.state;

    if (!isLoading) {
      return children;
    }

    return (
      <Backdrop
        className={classes.backdrop}
        open={isBackdropShown}
        transitionDuration={250}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
}

export default withStyles(styles)(Wait);
