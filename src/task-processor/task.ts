export interface TaskInterface {
    work(taskData: any);
}

export default abstract class Task implements TaskInterface {


    abstract work(taskData: any);

}
