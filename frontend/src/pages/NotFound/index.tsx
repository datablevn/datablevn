import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center px-24 py-12 bg-secondary rounded-lg shadow-xl">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4 font-semibold text-gray-700">
          Oops! Page not found.
        </p>
        <Button variant="outline" className="mt-6">
          <Link to="/">Back to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
