import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import DateCorrectionModal from '../datePicker/DateCorrectionModal';
import ModalBackdrop from '../modal/ModalBackdrop';

import BtnDateText, { TextWrapper } from './BtnDateText';

import Icons from '@/assets/svg/index';
import MODAL from '@/constants/modalLocation';
import { SizeType } from '@/types/textInputType';
import formatDatetoString from '@/utils/formatDatetoString';

interface BtnDateProps {
	date: string | null;
	time: string | null;
	size?: SizeType;
	isDelayed?: boolean;
	isDisabled?: boolean;
}
// date, time 각각 Date|null, String|null 로 관리
// 값이 없으면 '마감 기한' 등 텍스트 설정,
// 스타일 변경은 date, time null 여부로 결정

function BtnDate(props: BtnDateProps) {
	const { date = null, time = null, size = { type: 'long' }, isDelayed = false, isDisabled = false } = props;
	const [isPressed, setIsPressed] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	// 받아온 date, time 값을 초기값으로 설정, 이후 모달에서 수정시 변경
	const [currentDate, setCurrentDate] = useState<Date | null>(date ? new Date(date) : null);
	const [currentTime, setCurrentTime] = useState<string | null>(time);

	const handleCurrentDate = (newDate: Date) => {
		setCurrentDate(newDate);
	};
	const handleCurrentTime = (newTime: string) => {
		setCurrentTime(newTime);
	};

	const handleMouseDown = () => {
		if (size.type !== 'short') setIsPressed(true);
	};

	const handleMouseUp = () => {
		if (size.type !== 'short') {
			setIsPressed(false);
			setIsClicked((prev) => !prev);
		}
	};
	const isDefaultDate = date === null;
	const isDefaultTime = time === null;

	return (
		<ModalLayout>
			<BtnDateLayout
				isPressed={isPressed}
				isClicked={isClicked}
				size={size.type}
				isDelayed={isDelayed}
				isDisabled={isDisabled}
				isDefaultDate={isDefaultDate}
				isDefaultTime={isDefaultTime}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<BtnDateText
					icon={<CalanderIcon isDelayed={isDelayed} />}
					text={formatDatetoString(currentDate) || '마감 기한'}
					isDefault={isDefaultDate}
					size={size.type}
				/>
				<LineIcon size={size.type} isDelayed={isDelayed} />
				<BtnDateText
					icon={<ClockIcon isDelayed={isDelayed} />}
					text={currentTime || '마감 시간'}
					isDefault={isDefaultTime}
					size={size.type}
				/>
				{isClicked && size.type === 'long' && <XIcon size={size.type} />}
			</BtnDateLayout>
			{isClicked && (
				<>
					<DateCorrectionModal
						top={MODAL.DATE_CORRECTION.TASK_MODAL.top}
						left={MODAL.DATE_CORRECTION.TASK_MODAL.left}
						date={formatDatetoString(currentDate) || '마감 기한'}
						time={currentTime || '마감 시간'}
						onClick={handleMouseUp}
						handleCurrentDate={handleCurrentDate}
						handleCurrentTime={handleCurrentTime}
					/>
					<ModalBackdrop onClick={handleMouseUp} />
				</>
			)}
		</ModalLayout>
	);
}

export default BtnDate;

const ModalLayout = styled.div`
	position: relative;
`;

const XIcon = styled(Icons.IcnXCricle)<{ size: string }>`
	width: ${({ size }) => (size === 'long' ? '2rem' : '1.6rem')};
	height: ${({ size }) => (size === 'long' ? '2rem' : '1.6rem')};
`;

const CalanderIcon = styled(Icons.Icn_calander, {
	target: 'CalanderIcon',
	shouldForwardProp: (prop) => prop !== 'isDelayed',
})<{ isDelayed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;

	path {
		stroke: ${({ isDelayed, theme }) => (isDelayed ? theme.palette.Orange.Orange4 : theme.palette.Grey.Grey4)};
	}
`;

const ClockIcon = styled(Icons.Icn_date_clock, {
	target: 'ClockIcon',
	shouldForwardProp: (prop) => prop !== 'isDelayed',
})<{ isDelayed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;

	path {
		stroke: ${({ isDelayed, theme }) => (isDelayed ? theme.palette.Orange.Orange4 : theme.palette.Grey.Grey4)};
	}
`;

const LineIcon = styled(Icons.Icn_line, {
	target: 'LineIcon',
	shouldForwardProp: (prop) => prop !== 'isDelayed' && prop !== 'size',
})<{ size: string; isDelayed: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 0.1rem;
	height: ${({ size }) => (size === 'long' ? '2.2rem' : '1.2rem')};

	line {
		stroke: ${({ isDelayed, theme }) => (isDelayed ? theme.palette.Orange.Orange5 : theme.palette.Grey.Grey4)};
	}
`;

const BtnDateLayout = styled.div<{
	isPressed: boolean;
	isClicked: boolean;
	size: string;
	isDelayed: boolean;
	isDefaultDate: boolean;
	isDefaultTime: boolean;
	isDisabled: boolean;
}>`
	display: flex;
	gap: 1rem;
	align-items: center;
	width: fit-content;
	min-width: 1.8rem;
	height: ${({ size }) => (size === 'long' ? '2.2rem' : '2rem')};
	padding: ${({ size }) => (size === 'long' ? '0.5rem 1rem' : '0rem 1rem')};

	${({ size }) =>
		size !== 'short' &&
		css`
			cursor: pointer;
		`};

	border: 1px solid ${({ theme }) => theme.palette.Grey.Grey3};
	border-color: ${({ isClicked, theme }) => (isClicked ? theme.palette.Primary : theme.palette.Grey.Grey3)};
	border-radius: 8px;

	${({ isDelayed, theme }) =>
		isDelayed &&
		css`
			background: ${theme.palette.Orange.Orange1};
			border-color: ${theme.palette.Orange.Orange5};

			pointer-events: none;
		`}

	${({ isClicked, theme }) =>
		isClicked &&
		css`
			padding-right: 0.6rem;

			border-color: ${theme.palette.Primary};
			border-width: 1px;
		`}

	${({ isPressed, theme }) =>
		isPressed &&
		css`
			${TextWrapper} {
				color: ${theme.palette.Grey.White};
			}
		`}

	${({ isDisabled }) =>
		isDisabled &&
		css`
			cursor: default;
			opacity: 0.6;

			pointer-events: none;
		`}

		${({ size, isPressed, theme, isDefaultDate, isDefaultTime }) =>
		size !== 'short' &&
		css`
			&:hover {
				color: ${isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey6};

				background: ${isPressed ? theme.palette.Grey.Grey5 : theme.palette.Grey.Grey4};
				box-shadow: ${isPressed
					? `1px 0 0 0 ${theme.palette.Grey.Grey5} inset`
					: `1px 0 0 0 ${theme.palette.Grey.Grey4} inset`};

				${TextWrapper} {
					color: ${isDefaultDate || isDefaultTime ? theme.palette.Grey.Grey6 : theme.palette.Grey.Black};
				}
			}

			&:hover ${CalanderIcon}, &:hover ${ClockIcon}, &:hover ${LineIcon} {
				path {
					stroke: ${isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey5};
				}

				line {
					stroke: ${isPressed ? theme.palette.Grey.Grey4 : theme.palette.Grey.Grey5};
				}
			}
		`};
`;