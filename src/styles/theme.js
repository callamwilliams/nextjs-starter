export const theme = {
    primary: {
        fontSizes: {
            baseFontSize: 18,
        },
        fonts: {
            primary: '',
            icon: '',
        },
        colors: {
            primary: '#1C1970',
            secondary: '#FFFFFF',
            tertiary: '#17D3FF',
            error: '#DD0000',
            warning: '#EC921F',
            success: '#16cb00',
        },
    },
};

const currentTheme = 'primary';

export const activeTheme = theme[currentTheme];
