import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";

export function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 3001;
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
  const websiteUrl =
    process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
  return websiteUrl;
}

export const SuperTokensConfig: TypeInput = {
  framework: "express",
  supertokens: {
    // this is the location of the SuperTokens core.
    connectionURI: "http://localhost:3567", // use "http://supertokens:3567" if you the backend is running in a docker container
    apiKey: process.env.SUPERTOKENS_API_KEYS || undefined, // There is no API key by default. Visit the "Auth flow customization" -> "SuperTokens core settings" -> "Adding API Keys" section to see how to add one.
  },
  appInfo: {
    appName: "Datablevn",
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain(),
  },
  // recipeList contains all the modules that you want to
  // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        // We have provided you with development keys which you can use for testing.
        // IMPORTANT: Please replace them with your own OAuth keys for production use.
        {
          config: {
            thirdPartyId: "github",
            clients: [
              {
                clientId: process.env.GITHUB_CLIENT_ID!,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
              },
            ],
          },
        },
      ],
    }),
    Session.init(),
    Dashboard.init(),
    UserRoles.init(),
  ],
};
