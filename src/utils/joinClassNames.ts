export function joinClassNames(classNames: (string | undefined | null)[]) {
  return classNames.filter(Boolean).join(" ");
}
