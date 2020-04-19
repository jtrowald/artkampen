import { TabNavigator } from "@react-navigation";
import * as React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const INITIAL_ROUTE_NAME = "Log_in";

const config = {
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
};

export default TabNavigator(config);
