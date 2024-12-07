export function binaryToIPv6(binary: Buffer): string {
  const address = binary.toString("hex");
  const chunks = address.match(/.{1,4}/g) || [];
  return chunks.join(":");
}

export function iPv6ToBinary(ipAddress: string): Buffer {
  const chunks = ipAddress.split(":");
  const buffer = Buffer.alloc(16);

  let offset = 0;
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const chunkValue = parseInt(chunk, 16);
    buffer.writeUInt16BE(chunkValue, offset);
    offset += 2;
  }

  return buffer;
}
