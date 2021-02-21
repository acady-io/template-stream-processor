import {Stream} from "acady-stream-processor";

export default class DummyStream extends Stream {

    async processRecords(): Promise<void> {
        console.log(this.records);
    }

}
