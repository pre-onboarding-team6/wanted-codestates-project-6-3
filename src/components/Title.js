export default function Title({
  className = 'block border-b',
  children,
  ...rest
}) {
  return <div {...rest}>{children}</div>;
}
