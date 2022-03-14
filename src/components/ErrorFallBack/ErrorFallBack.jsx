import "./ErrorFallBack.scss";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error" role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
