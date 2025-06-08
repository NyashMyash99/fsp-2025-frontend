import { createElement, type JSX, useState } from 'react';
import RuIcon from '../assets/icons/flags/ru.svg?react';
import EnIcon from '../assets/icons/flags/en.svg?react';
import RuDarkIcon from '../assets/icons/flags/ru-dark.svg?react';
import EnDarkIcon from '../assets/icons/flags/en-dark.svg?react';
import i18n from 'i18next';
import type { ReactComponentLike } from 'prop-types';
import { Language } from '../utils/types/enums/language.enum.js';
import { SvgIcon } from '@mui/material';
import { useThemeState } from '../stores/theme/theme.slice.js';
import { ThemeMode } from '../utils/types/enums/theme-mode.enum.js';

export function LanguageSelect(): JSX.Element {
  const [language, setLanguage] = useState<Language>(i18n.language as Language);
  const { theme } = useThemeState();

  const icons: Record<Language, ReactComponentLike> = {
    ru: RuIcon,
    en: EnIcon,
  };

  const darkIcons: Record<Language, ReactComponentLike> = {
    ru: RuDarkIcon,
    en: EnDarkIcon,
  };

  function changeLanguage(): void {
    let nextLanguage: Language = Language.RU;

    switch (language) {
      case Language.RU:
        nextLanguage = Language.EN;
        break;
      case Language.EN:
        nextLanguage = Language.RU;
        break;
    }

    void i18n.changeLanguage(nextLanguage);
    setLanguage(nextLanguage);
  }

  return (
    <SvgIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
      onClick={() => changeLanguage()}
    >
      {createElement((theme === ThemeMode.LIGHT ? icons : darkIcons)[language])}
    </SvgIcon>
  );
}
