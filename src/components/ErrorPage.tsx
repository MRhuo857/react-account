import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>哎呦!</h1>
      <p>发生了一个错误！</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
