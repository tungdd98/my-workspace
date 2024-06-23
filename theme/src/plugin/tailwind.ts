import plugin from 'tailwindcss/plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-function
module.exports = plugin(function () {}, {
  theme: {
    extend: {
      colors: {
        'primary-main': 'var(--mui-palette-primary-main)',
        'primary-dark': 'var(--mui-palette-primary-dark)',
        'primary-light': 'var(--mui-palette-primary-light)',
        'primary-contrastText': 'var(--mui-palette-primary-contrastText)',
        'secondary-main': 'var(--mui-palette-secondary-main)',
        'secondary-dark': 'var(--mui-palette-secondary-dark)',
        'secondary-light': 'var(--mui-palette-secondary-light)',
        'secondary-contrastText': 'var(--mui-palette-secondary-contrastText)',
        'info-main': 'var(--mui-palette-info-main)',
        'info-dark': 'var(--mui-palette-info-dark)',
        'info-light': 'var(--mui-palette-info-light)',
        'info-contrastText': 'var(--mui-palette-info-contrastText)',
        'warning-main': 'var(--mui-palette-warning-main)',
        'warning-dark': 'var(--mui-palette-warning-dark)',
        'warning-light': 'var(--mui-palette-warning-light)',
        'warning-contrastText': 'var(--mui-palette-warning-contrastText)',
        'success-main': 'var(--mui-palette-success-main)',
        'success-dark': 'var(--mui-palette-success-dark)',
        'success-light': 'var(--mui-palette-success-light)',
        'success-contrastText': 'var(--mui-palette-success-contrastText)',
        'error-main': 'var(--mui-palette-error-main)',
        'error-dark': 'var(--mui-palette-error-dark)',
        'error-light': 'var(--mui-palette-error-light)',
        'error-contrastText': 'var(--mui-palette-error-contrastText)',
      },
    },
  },
});
