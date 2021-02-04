import taskProcessor from "./tasks";

export async function handler(event) {
    const response = {};
    await taskProcessor.process(event);
    return response;
}
