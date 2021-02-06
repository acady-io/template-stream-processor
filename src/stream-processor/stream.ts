export interface TaskInterface {
    work(taskData: any);
}

export default abstract class Stream implements TaskInterface {


    abstract work(taskData: any);

}
