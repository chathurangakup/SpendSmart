const sharedFonts = {
    Montserrat_Black: 'Montserrat-Black',
    Montserrat_Bold: 'Montserrat-Bold',
    Montserrat_Medium: 'Montserrat-Medium',
    Montserrat_Regular: 'Montserrat-Regular',
    Montserrat_Semibold: 'Montserrat-Semibold',
    Nunito_Black: 'Nunito-Black',
    Nunito_Bold: 'Nunito-Bold',
    Nunito_SemiBold: 'Nunito-SemiBold',
    Nunito_Medium: 'Nunito-Medium',
    Nunito_Regular: 'Nunito-Regular',
};

const sharedColors = {
    black: '#000000',
    white:'#ffffff',
    borderColors:'#666',
    headercolor: '#d6bfff',
    primary_light: '#f9f5ff',
    primary_dark: '#333333',
    primary_accent_light: '#4a1b88',
    primary_accent_dark: '#2f0665',

    
}

const hexToRGBA = (hex: string, opacity: number) => {
    const rgb = hex
        .replace('#', '')
        .split(/(?=(?:..)*$)/)
        .map(x => parseInt(x, 16));
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
};

export const lightTheme = {
    colors: {
        ...sharedColors,
        backgroundColor: sharedColors.primary_light,
        
       
    },
    margins: {
        sm: 2,
        md: 4,
        lg: 8,
        xl: 12
    },
    fonts: {
        ...sharedFonts,
    },
    utils: {
        hexToRGBA
    }
    // add any keys/functions/objects/arrays you want!
} as const

export const darkTheme = {
    colors: {
        ...sharedColors,
        backgroundColor: sharedColors.primary_dark,
    
    },
    margins: {
        sm: 2,
        md: 4,
        lg: 8,
        xl: 12
    },
    fonts: {
        ...sharedFonts,
    },
    utils: {
        hexToRGBA
    }
    // add any keys/functions/objects/arrays you want!
} as const

// export const premiumTheme = {
//     colors: {
//         ...sharedColors,
//         backgroundColor: sharedColors.sky,
//         headerBGColor: sharedColors.sky,
//         card_typography: '#76278f',
//         card: sharedColors.blood,
//         devider: '#4b4b4b',
//         disable_text: sharedColors.blood,
//         disable_button: sharedColors.sky,
//         error_toast: sharedColors.blood,
//     },
//     margins: {
//         sm: 2,
//         md: 4,
//         lg: 8,
//         xl: 12
//     },
//     fonts: {
//         ...sharedFonts,
//     },
//     utils: {
//         hexToRGBA
//     }
//     // add any keys/functions/objects/arrays you want!
// } as const