import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Wait from "./Wait";

import PlainLayout from "../ui/layouts/Plain";
import DashboardLayout from "../ui/layouts/Dashboard";

import HomePage from "../ui/pages/Home";
import DashboardPage from "../ui/pages/Dashboard";

import SignInPage from "../ui/pages/authority/SignIn";
import SignUpPage from "../ui/pages/authority/SignUp";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/sign-in">
        <PlainLayout>
          <SignInPage />
        </PlainLayout>
      </Route>
      <Route path="/sign-up">
        <PlainLayout>
          <SignUpPage />
        </PlainLayout>
      </Route>

      <Route path="/dashboard">
        <Wait for={() => new Promise(resolve => setTimeout(resolve, 20))}>
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
