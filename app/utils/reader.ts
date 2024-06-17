import MsgReader from "@kenjiuno/msgreader";

export async function reader(buffer: Buffer) {
  const testMsg = new MsgReader(buffer);
  const testMsgInfo = testMsg.getFileData();
  return testMsgInfo;
}
