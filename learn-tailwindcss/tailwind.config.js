module.exports = {
    purge: [],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            display: ['Montserrat', 'Poppins'],
            body: ['Montserrat', 'Poppins'],
        },
        colors: {
            transparent: 'transparent',
            black: {
                100: '#363636',
                900: '#000',
            },
            white: '#fff',
            gray: {
                100: '#EEEEEE',
                200: '#CCCCCC',
                900: '#FBFBFB',
            },
            orange: '#FF8409',
            red: '#FF0000',
        },
        opacity: {
            '0': '0',
            '20': '0.2',
            '40': '0.4',
            '60': '0.6',
            '80': '0.8',
            '100': '1',
        },
        extend: {
            screens: {
                '2xl': '1440px',
            }
        },
    },
    variants: {},
    plugins: [],
}