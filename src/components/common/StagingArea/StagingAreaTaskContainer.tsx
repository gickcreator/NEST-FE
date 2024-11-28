import styled from '@emotion/styled';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import ScrollGradient from '@/components/common/ScrollGradient';
import StagingAreaSetting from '@/components/common/StagingArea/StagingAreaSetting';
import { TaskType } from '@/types/tasks/taskType';
import BtnTaskContainer from '../BtnTaskContainer';

function StagingAreaTaskContainer() {
	const dummyTaskList: TaskType[] = [
		{
			id: 0,
			name: '밥먹기',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: false,
			status: '진행중',
		},
		{
			id: 1,
			name: '오소기 발표 준비',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 2,
			name: '이시하',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '완료',
		},
		{
			id: 3,
			name: '조영주',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '미완료',
		},
		{
			id: 0,
			name: '안은소',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: false,
			status: '진행중',
		},
		{
			id: 1,
			name: '오픈',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 2,
			name: '소스',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '완료',
		},
		{
			id: 3,
			name: '실습',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '미완료',
		},
		{
			id: 0,
			name: '발표',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: false,
			status: '진행중',
		},
		{
			id: 1,
			name: '준비',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 2,
			name: '야호',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '완료',
		},
		{
			id: 3,
			name: 'test',
			deadLine: {
				date: '2024-11-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '미완료',
		},
	];

	return (
		<StagingAreaTaskContainerLayout>
			<StagingAreaSetting />
			<BtnTaskContainer type="staging">
				{dummyTaskList.map((task) => (
					<BtnTask
						key={task.id + task.name}
						btnType="staging"
						hasDescription={task.hasDescription}
						id={task.id}
						name={task.name}
						status={task.status}
						deadLine={task.deadLine}
					/>
				))}
				<ScrollGradient />
			</BtnTaskContainer>
		</StagingAreaTaskContainerLayout>
	);
}

export default StagingAreaTaskContainer;

const StagingAreaTaskContainerLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
	align-items: flex-start;
	align-self: stretch;
`;