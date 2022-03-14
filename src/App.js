import React from "react";
import { Layout } from "./layout/layout";
import { Form } from "./components";
import { Container } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Layout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Container>
            <Form />
          </Container>
        </ErrorBoundary>
      </Layout>
    </>
  );
}

export default App;
