import Task from "./task";

export class TaskProcessor {

    private taskMap: Map<string, typeof Task> = new Map<string, typeof Task>();

    public registerTask(taskName: string, taskClass: typeof Task) {
        this.taskMap.set(taskName, taskClass);
    }

    public process(event: any) {
        console.log(event);
    }

}
