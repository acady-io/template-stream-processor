import {TaskProcessor} from "./task-processor/task-processor";
import DummyTask from "./tasks/dummy-task";

const taskProcessor = new TaskProcessor();

taskProcessor.registerTask('DummyTask', DummyTask);

export default taskProcessor;
