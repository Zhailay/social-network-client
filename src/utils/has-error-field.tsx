export function hasErrorField(err: unknown): err is { data: { err: string } } {
  return (
    typeof err === "object" &&
    err !== null &&
    "data" in err &&
    typeof err.data === "object" &&
    err.data !== null &&
    "err" in err.data
  )
}
