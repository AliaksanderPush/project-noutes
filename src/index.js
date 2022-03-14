import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevTools } from "react-query/devtools";
import App from "./App";
import "./index.scss";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevTools />
  </QueryClientProvider>,
  document.getElementById("root")
);
