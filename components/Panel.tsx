export default function Panel({ children, className }) {
  return (
    <div
      className={`glass rounded-2xl border-solid border-2 border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}
