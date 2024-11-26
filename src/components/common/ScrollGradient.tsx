import styled from '@emotion/styled';

function ScrollGradient() {
	return (
		<ScrollGradientLayout>
			<ScrollGradientTop />
			<ScrollGradientBottom />
		</ScrollGradientLayout>
	);
}

export default ScrollGradient;

const ScrollGradientLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ScrollGradientTop = styled.div`
	flex-shrink: 0;
	width: 100%;
	height: 2.2rem;
	background: linear-gradient(180deg, rgb(255 255 255 / 0%) 0%, ${({ theme }) => theme.palette.Grey.White} 65.91%);
`;

const ScrollGradientBottom = styled.div`
	flex-shrink: 0;
	width: 100%;
	height: 1.2rem;
	background: ${({ theme }) => theme.palette.Grey.White};
`;