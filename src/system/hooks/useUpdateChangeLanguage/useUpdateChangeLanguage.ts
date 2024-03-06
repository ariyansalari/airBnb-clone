/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AvailabeLanguageType } from "./types";
import { languageAtom } from "system";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

export const useUpdateChangeLanguage = () => {
  const { pathname } = useLocation();
  const availableLanguages: string[] = ["fa", "en", "jp"];
const {i18n}=useTranslation()
  const navigate = useNavigate();
  const [, setLang] = useRecoilState<any>(languageAtom);

  const changeLanguage = (lang: AvailabeLanguageType) => {
    setLang(lang);
    // i18n.changeLanguage(lang);
    navigate(`${lang}/${pathname.split("/").slice(2).join("/")}`);
  };

  // useEffect(() => {
  //   const routeLang = pathname.split("/")[1];
  //   if (availableLanguages.includes(routeLang)) i18n.changeLanguage(routeLang);
  //   else changeLanguage(i18n.language as AvailabeLanguageType);
  // }, [i18n, pathname]);
  return {
    changeLanguage,
  };
};
