import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

const SettingXBtn = () => {
	return (
		<SettingXBtnLayout>
			<Icons.SettingX /> {/*아이콘 크기 조정 필요*/}
		</SettingXBtnLayout>
	);
};

export default SettingXBtn;

const SettingXBtnCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

const SettingXBtnLayout = styled.button`
	${SettingXBtnCss}
	background-color: ${({ theme }) => theme.palette.BLUE_DISABLED}; /* 수정 필요 */

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLUE_DISABLED};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.PRIMARY}; /* svg 색 수정 필요 */
	}
`;