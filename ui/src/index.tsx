import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "react-query";

/**  This is the insertion point of you app. The below <App/> Component will be the parent element of every other elemenet in this project
 * We are creating a new queryClient, which is a state management, and surrounding our app with it.
 * As a child element, every component within the <App/> will have access to this queryClient.
 * For our intents, that is your entire application, so this is our singluar "state management instance" */

/** Declaring new isntance that the application will use*/
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    {/* passing the new instance to a query clinet component. All sub elements (entire app) will have access to this state */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

/**  If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
reportWebVitals();
