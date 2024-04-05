/* eslint-disable react-refresh/only-export-components */
import ThirdPartyEmailPassword, {
  Github,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";
import Session from "supertokens-auth-react/recipe/session";

export function getApiDomain() {
  const apiPort = import.meta.env.VITE_API_PORT || 8080;
  const apiUrl = import.meta.env.VITE_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = import.meta.env.VITE_PORT || 3000;
  const websiteUrl =
    import.meta.env.VITE_WEBSITE_URL || `http://localhost:${websitePort}`;
  return websiteUrl;
}
// console.log(getApiDomain());
console.log(getWebsiteDomain());

export const SuperTokensConfig = {
  appInfo: {
    appName: "datablevn",
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain(),
  },
  // recipeList contains all the modules that you want to
  // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Github.init()],
      },
    }),
    Session.init(),
  ],
};

export const recipeDetails = {
  docsLink: "https://supertokens.com/docs/thirdpartyemailpassword/introduction",
};

export const PreBuiltUIList = [ThirdPartyEmailPasswordPreBuiltUI];

export const ComponentWrapper = (props: {
  children: JSX.Element;
}): JSX.Element => {
  return props.children;
};
