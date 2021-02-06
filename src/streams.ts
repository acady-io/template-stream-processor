
import DummyStream from "./streams/dummy-stream";
import {StreamProcessor} from "./stream-processor/stream-processor";

const taskProcessor = new StreamProcessor();

taskProcessor.registerStream('DummyTask', DummyStream);

export default taskProcessor;
