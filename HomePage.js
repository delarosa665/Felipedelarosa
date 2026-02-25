import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <h2>Welcome to the Price Checker App</h2>

      <h3>Conditional Rendering</h3>
      <p>
        Conditional rendering allows components to show or hide content
        depending on a condition.
      </p>

      <h3>useEffect</h3>
      <p>
        useEffect is a React Hook that runs code when a component mounts,
        updates, or unmounts. It is commonly used for side effects like
        updating the document title.
      </p>

      <h3>Routing Components</h3>
      <p>
        BrowserRouter wraps the app to enable routing.
        Routes defines different routes.
        Route connects a path to a component.
        Link allows navigation without page reload.
      </p>
    </div>
  );
}

export default HomePage;
