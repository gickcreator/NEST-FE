import { css } from '@emotion/react';

const palette = {
    // BLUE
    BLUE_DISABLED: '#B9D0FF',
    BLUE_DEFAULT: '#3876F6',
    BLUE_HOVER: '#245CCE',
    BLUE_PASSED: '#173B86',

    //GRAY
    GRAY_DISABLED: '#E9E9EE',
    GRAY_DEFAULT: '#FFFFFF',
    GRAY_HOVER: '#CDCDCD',
    GRAY_PASSED: '#919191',

    //BLACK
    BLACK_DISABLED: '#494949',
    BLACK_DEFAULT: '#121212',
    BLACK_HOVER: '#838383',
    BLACK_PASSED: '#363636',

    PRIMARY: '#3876F6',
    SECONDARY: '#FF7950',
    BLACK: '#212121',
    WITHE: '#FFFFFF',
    GREY_01: '#E9E9EE',
    GREY_02: '#C6C6D0',
    GREY_03: '#9090A0',
    GREY_04: '#626273',
    GREY_05: '#464656',
    GREY_06: '#34343C',
};

const fonts = {
    PretendardBold: 'Pretendard-Bold',
    PretendardSemiBold: 'Pretendard-SemiBold',
    PretendardMedium: 'Pretendard-Medium',
};

const fontTheme = {
    DISPLAY_01: css`
		font-size: 6.4rem;
		font-family: ${fonts.PretendardBold};
		line-height: 7.6rem;
		letter-spacing: -0.025em;
	`,

    TITLE_01: css`
		font-size: 4.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 4.5rem;
		letter-spacing: -0.01em;
	`,
    TITLE_02: css`
		font-size: 3.2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 4rem;
		letter-spacing: 0;
	`,
    TITLE_03: css`
		font-size: 2.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 3.2rem;
		letter-spacing: 0;
	`,

    HEADLINE_01: css`
		font-size: 2.2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 3rem;
		letter-spacing: 0;
	`,
    HEADLINE_02: css`
		font-size: 2rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.8rem;
		letter-spacing: 0;
	`,
    HEADLINE_03: css`
		font-size: 1.8rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.4rem;
		letter-spacing: 0;
	`,

    BODY_01: css`
		font-size: 1.6rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -0.02em;
	`,
    BODY_02: css`
		font-size: 1.6rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -0.02em;
	`,
    BODY_03: css`
		font-size: 1.5rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -0.02em;
	`,
    BODY_04: css`
		font-size: 1.5rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -0.02em;
	`,

    LABEL_01: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2rem;
		letter-spacing: -0.01em;
	`,
    LABEL_02: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardSemiBold};
		line-height: 2.4rem;
		letter-spacing: -0.01em;
	`,
    LABEL_03: css`
		font-size: 1.4rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2rem;
		letter-spacing: -0.01em;
	`,

    CAPTION_01: css`
		font-size: 1.2rem;
		font-family: ${fonts.PretendardMedium};
		line-height: 2.4rem;
		letter-spacing: -0.01em;
	`,
};

export const theme = {
    palette,
    fontTheme,
};

export type ThemeType = typeof theme;