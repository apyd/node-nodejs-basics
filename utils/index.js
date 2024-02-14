export const throwFSError = error => {
  throw new Error('FS operation failed: ', error)
}