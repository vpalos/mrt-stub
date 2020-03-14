import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Wait from "./Wait";

import PlainLayout from "../ui/layouts/Plain";
import DashboardLayout from "../ui/layouts/Dashboard";

import HomePage from "../ui/pages/Home";
import DashboardPage from "../ui/pages/Dashboard";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard">
        <Wait for={() => new Promise(resolve => setTimeout(resolve, 2000))}>
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        </Wait>
      </Route>

      <Route path="/">
        <PlainLayout>
          <HomePage />
        </PlainLayout>
      </Route>
    </Switch>
  </BrowserRouter>
);
