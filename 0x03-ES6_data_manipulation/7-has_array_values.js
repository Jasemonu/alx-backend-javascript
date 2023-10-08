export default function hasValuesFromArray(set, array) {
  // Using the every method to check if all elements in the array are in the set
  return array.every((element) => set.has(element));
}
