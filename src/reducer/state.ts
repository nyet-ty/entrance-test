export type Directory = {
  id: number,
  title: string,
  children?: Directory[],
  showChildren?: boolean,
}
