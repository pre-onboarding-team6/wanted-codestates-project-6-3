export default function ChevronDoubleRight({ className = 'h-5 w-5', ...rest }) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    </svg>
  );
}
