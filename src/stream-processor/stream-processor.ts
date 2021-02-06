import Stream from "./stream";

export class StreamProcessor {

    private taskMap: Map<string, typeof Stream> = new Map<string, typeof Stream>();

    public registerStream(streamName: string, streamClass: typeof Stream) {
        this.taskMap.set(streamName, streamClass);
    }

    public process(event: any) {
        console.log(event);
    }

}
