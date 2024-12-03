import BtnTask from '../common/BtnTask/BtnTask';
import BtnTaskContainer from '../common/BtnTaskContainer';
import ScrollGradient from '../common/ScrollGradient';

import { TaskType } from '@/types/tasks/taskType';

interface TargetTaskSectionProps {
	handleSelectedTarget: (task: TaskType | null) => void;
	selectedTarget: TaskType | null;
	tasks?: TaskType[]; // 선택적 속성으로 유지
}

function TargetTaskSection({
	handleSelectedTarget,
	selectedTarget,
	tasks,
}: TargetTaskSectionProps) {
	// tasks가 없을 경우 dummyTaskList를 기본값으로 사용
	const taskList = tasks ?? [
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
				date: '2024-12-01',
				time: '12:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 2,
			name: '이시하',
			deadLine: {
				date: '2024-12-02',
				time: '12:30',
			},
			hasDescription: false,
			status: '완료',
		},
		{
			id: 3,
			name: '조영주',
			deadLine: {
				date: '2024-12-03',
				time: '12:30',
			},
			hasDescription: true,
			status: '미완료',
		},
	];

	return (
		<BtnTaskContainer type="target">
			{taskList.map((task) => (
				<BtnTask
					btnType="target"
					key={task.id}
					hasDescription={task.hasDescription}
					name={task.name}
					deadLine={task.deadLine}
					status={task.status}
					id={task.id}
					handleSelectedTarget={handleSelectedTarget}
					selectedTarget={selectedTarget}
				/>
			))}
			<ScrollGradient />
		</BtnTaskContainer>
	);
}

export default TargetTaskSection;
