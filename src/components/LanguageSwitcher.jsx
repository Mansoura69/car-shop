import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const languages = [
    {
      code: "fr",
      flagClass: "flag-fr",
      label: t("language.fr"),
    },
    {
      code: "en",
      flagClass: "flag-en",
      label: t("language.en"),
    },
    {
      code: "es",
      flagClass: "flag-es",
      label: t("language.es"),
    },
  ];

  const currentLanguage =
    languages.find((language) => language.code === i18n.resolvedLanguage) ||
    languages.find((language) => language.code === i18n.language) ||
    languages[0];

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher-wrap">
      <span
        className={`language-flag ${currentLanguage.flagClass}`}
        aria-hidden="true"
      />

      <select
        className="language-switcher"
        value={currentLanguage.code}
        onChange={handleChangeLanguage}
        aria-label={t("language.change")}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
