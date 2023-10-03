export default function createInt8TypedArray(length, position, value) {
  // Check if the specified position is within the valid range
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return buffer;
}
