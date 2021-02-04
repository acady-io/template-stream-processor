import Task from "../task-processor/task";

export default class DummyTask extends Task {


    work(taskData: any) {
        console.log(taskData);
    }


}
