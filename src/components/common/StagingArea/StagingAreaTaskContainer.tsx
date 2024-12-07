import styled from '@emotion/styled';

import BtnTaskContainer from '../BtnTaskContainer';

import BtnTask from '@/components/common/BtnTask/BtnTask';
import ScrollGradient from '@/components/common/ScrollGradient';
import StagingAreaSetting from '@/components/common/StagingArea/StagingAreaSetting';
import { TaskType } from '@/types/tasks/taskType';

interface StagingAreaTaskContainerProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks?: TaskType[];
}
function StagingAreaTaskContainer({
	handleSelectedTarget,
	selectedTarget,
	tasks,
}: StagingAreaTaskContainerProps) {
	// tasks가 없으면 dummyTaskList 사용
	const taskList = tasks ?? [
		{
			id: 4,
			name: '안은소',
			deadLine: {
				date: '2024-12-30',
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
				{taskList.map((task) => (
					<BtnTask
						key={task.id + task.name}
						btnType="staging"
						hasDescription={task.hasDescription}
						id={task.id}
						name={task.name}
						status={task.status}
						deadLine={task.deadLine}
						selectedTarget={selectedTarget}
						handleSelectedTarget={handleSelectedTarget}
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