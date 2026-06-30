import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container not-found-page">
      <h1 className="not-found-code">
        4<span>0</span>4
      </h1>
      <p className="not-found-text">Oups, cette page n'existe pas.</p>
      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
