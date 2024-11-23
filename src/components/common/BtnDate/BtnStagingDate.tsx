import styled from '@emotion/styled';

function BtnStagingDate() {
    return (
        <BtnStagingDateLayout>
            <BtnStagingDateText>⇥ 마감 기한 설정</BtnStagingDateText>
        </BtnStagingDateLayout>
    );
}

export default BtnStagingDate;

const BtnStagingDateText = styled('p', { target: 'BtnStagingDateText' })`
	color: ${({ theme }) => theme.palette.GREY_05};
	font-size: 1.2rem;
	text-align: center;
`;

const BtnStagingDateLayout = styled('div', { target: 'BtnStagingDateLayout' })`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: 2.2rem;
	padding: 0.3rem 1.2rem;

	background: ${({ theme }) => theme.palette.GREY_03};
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		background: ${({ theme }) => theme.palette.GREY_04};

		${BtnStagingDateText} {
			color: ${({ theme }) => theme.palette.GREY_06};
		}
	}

	&:active {
		background: ${({ theme }) => theme.palette.GREY_05};

		${BtnStagingDateText} {
			color: ${({ theme }) => theme.palette.WITHE};
		}
	}
`;