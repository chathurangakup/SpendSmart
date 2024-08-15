export const lightTheme = {
    colors: {
      typography: '#000000',
      background: '#ffffff'
    },
    margins: {
      sm: 2,
      md: 4,
      lg: 8,
      xl: 12
    }
  } as const
 
  export const darkTheme = {
    colors: {
      typography: '#ffffff',
      background: '#000000'
    },
    margins: {
      sm: 2,
      md: 4,
      lg: 8,
      xl: 12
    }
  } as const

  const sharedColors = {
    barbie: '#ff9ff3',
    blood: '#ff6b6b',
    sky: '#48dbfb',
    primary_light: '#efefef',
    primary_dark: '#333333',
    primary_accent_light: '#009688',
    primary_accent_dark: '#10b981',
    card_light: '#dcdcdc',
    card_dark: '#454545',
    devider_light: '#4b4b4b',
    devider_dark: '#4b4b4b',
    card_typography_light: '#292929',
    card_typography_dark: '#f6f6f6',
    disable_text_light: '#dcdcdc',
    disable_text_dark: '#6d6d6d',
    disable_button_light: '#bdbdbd',
    disable_button_dark: '#4f4f4f'
}

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

  export const premiumTheme = {
    colors: {
        ...sharedColors,
        backgroundColor: sharedColors.sky,
        headerBGColor: sharedColors.sky,
        accent: sharedColors.barbie,
        card_typography: '#76278f',
        card: sharedColors.blood,
        devider: '#4b4b4b',
        disable_text: sharedColors.blood,
        disable_button: sharedColors.sky
    },
    margins: {
        sm: 2,
        md: 4,
        lg: 8,
        xl: 12
    },
    fonts: {
        ...sharedFonts,
    }
    // add any keys/functions/objects/arrays you want!
} as const
 
  // define other themes