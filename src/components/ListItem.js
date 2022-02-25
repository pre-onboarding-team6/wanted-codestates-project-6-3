export default function ListItem({
  className = 'block select-none hover:bg-gray-100',
  children,
  ...rest
}) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
