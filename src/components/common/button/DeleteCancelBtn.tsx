import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface DeleteCancelBtnProps {
	status: 'delete' | 'cancel';
}

const DeleteCancelBtn = ({ status }: DeleteCancelBtnProps) => {
	return <>{status === 'delete' ? <DeleteBtn>삭제</DeleteBtn> : <CancelBtn>취소</CancelBtn>}</>;
};

export default DeleteCancelBtn;

const DeleteCancelBtnCss = css`
	display: flex;
	align-items: center;
	align-self: stretch;
	width: 13rem;
	height: 3.2rem;
	padding: 0.7rem 1.2rem;

	box-shadow: 0 0 24px 0 rgb(0 0 0 / 12%);
	border-radius: 8px;
`;

const DeleteBtn = styled.button`
	${DeleteCancelBtnCss}
	color: ${({ theme }) => theme.palette.WITHE};

	background-color: ${({ theme }) => theme.palette.SECONDARY};
	${({ theme }) => theme.fontTheme.BODY_02};

	&:hover {
		background-color: ${({ theme }) => theme.palette.BLACK}; /* 수정 필요 */
	}
`;

const CancelBtn = styled.button`
	${DeleteCancelBtnCss}
	color: ${({ theme }) => theme.palette.GREY_05};

	background-color: ${({ theme }) => theme.palette.WITHE};
	${({ theme }) => theme.fontTheme.BODY_02};

	&:hover {
		color: ${({ theme }) => theme.palette.GREY_06};

		background-color: ${({ theme }) => theme.palette.GREY_03};
	}
`;