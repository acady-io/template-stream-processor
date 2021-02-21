
import DummyStream from "./streams/dummy-stream";
import {StreamProcessor} from "acady-stream-processor";

const taskProcessor = new StreamProcessor();

taskProcessor.registerStream('DummyTask', new DummyStream());

export default taskProcessor;
