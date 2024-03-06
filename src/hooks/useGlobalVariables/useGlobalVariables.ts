import { useTranslation } from "react-i18next"

export const useGlobalVariables = () => {
const {t}=useTranslation()
    window.t=t
}
 