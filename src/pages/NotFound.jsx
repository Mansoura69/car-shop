import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="container not-found-page">
      <h1 className="not-found-code">
        4<span>0</span>4
      </h1>
      <p className="not-found-text">{t("notFound.text")}</p>
      <Link to="/" className="btn btn-primary">
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}

export default NotFound;
