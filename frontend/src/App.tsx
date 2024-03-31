import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import "./index.css";
import { Home, Dashboard, NotFound } from "./pages";
import { PreBuiltUIList, SuperTokensConfig, ComponentWrapper } from "./config";

SuperTokens.init(SuperTokensConfig);

function App() {
  return (
    <SuperTokensWrapper>
      <ComponentWrapper>
        <Router>
          <div className="fill">
            <Routes>
              {/* This shows the login UI on "/auth" route */}
              {getSuperTokensRoutesForReactRouterDom(
                reactRouterDom,
                PreBuiltUIList
              )}
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/dashboard"
                element={
                  <SessionAuth>
                    <Dashboard />
                  </SessionAuth>
                }
              />
            </Routes>
          </div>
        </Router>
      </ComponentWrapper>
    </SuperTokensWrapper>
  );
}

export default App;
