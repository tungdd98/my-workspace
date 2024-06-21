import { PaletteMode } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import {
  paletteOptionsDark,
  paletteOptionsLight,
} from './common/palette-options';
import { typography } from './common/typography';
// import { overrides } from './common/overrides';
import { shadows } from './common/shadows';
import { spacingFactor } from './common/spacing-factor';

export const getAppTheme = (mode: PaletteMode): ThemeOptions => {
  const paletteOptions =
    mode === 'light' ? paletteOptionsLight : paletteOptionsDark;

  return {
    palette: paletteOptions,
    typography,
    // components: overrides,
    shadows,
    spacing: spacingFactor,
  };
};
