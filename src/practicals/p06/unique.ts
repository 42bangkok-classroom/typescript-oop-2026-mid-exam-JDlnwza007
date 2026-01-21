
export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const unq01 = arr1.filter(val => arr2.indexOf(val) == -1)
  const unq02 = arr2.filter(val => arr1.indexOf(val) == -1)
  const ax = unq01.concat(unq02)
  const me = ax.filter((v, i) => ax.indexOf(v) !== i && ax.lastIndexOf(v) === i)
  const removedMe = ax.filter(val => me.indexOf(val) == -1)
  return removedDup
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
