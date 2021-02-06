import Stream from "../stream-processor/stream";

export default class DummyStream extends Stream {


    work(streamData: any) {
        console.log(streamData);
    }


}
