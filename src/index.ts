import streamProcessor from "./streams";

export async function handler(event) {
    const response = {};
    await streamProcessor.process(event);
    return response;
}
