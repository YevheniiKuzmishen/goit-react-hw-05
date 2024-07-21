import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Something went wrong, dont worry be happy😎</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
