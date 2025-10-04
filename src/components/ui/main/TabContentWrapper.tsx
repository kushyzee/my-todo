export default function TabContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-3 space-y-2">{children}</div>;
}
