import { type JSX } from 'react';
import type { ReactComponentLike } from 'prop-types';
import { Language } from '../../utils/types/enums/language.enum.js';
import { SvgIcon } from '@mui/material';
import { useThemeState } from '../../stores/theme/theme.slice.js';
import { ThemeMode } from '../../utils/types/enums/theme-mode.enum.js';
import { useTranslation } from 'react-i18next';

import RuIcon from '../../assets/icons/flags/ru.svg?react';
import EnIcon from '../../assets/icons/flags/en.svg?react';
import RuDarkIcon from '../../assets/icons/flags/ru-dark.svg?react';
import EnDarkIcon from '../../assets/icons/flags/en-dark.svg?react';

const icons: Record<ThemeMode, Record<Language, ReactComponentLike>> = {
  LIGHT: {
    ru: RuIcon,
    en: EnIcon,
  },
  DARK: {
    ru: RuDarkIcon,
    en: EnDarkIcon,
  },
};

export function LanguageSelect(): JSX.Element {
  const { i18n } = useTranslation();
  const { theme } = useThemeState();

  const language = i18n.language as Language;

  function changeLanguage(): void {
    const nextLanguage = language === Language.RU ? Language.EN : Language.RU;
    void i18n.changeLanguage(nextLanguage);
  }

  const Icon = icons[theme][language];

  return (
    <SvgIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
      onClick={() => changeLanguage()}
    >
      <Icon />
    </SvgIcon>
  );
}
