export default function ListItem({
  className = 'block hover:bg-gray-50',
  children,
  ...rest
}) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
