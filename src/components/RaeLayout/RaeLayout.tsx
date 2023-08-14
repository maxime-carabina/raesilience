export function RaeLayout({ ...props }) {
  const { children } = props;

  // Uncomment these functions to enable theme toggling
  // const [_, setSelectedTheme] = useState(
  //   storedTheme || 'theme-dark',
  // );
  // function handleSetTheme(theme: string) {
  //   setSelectedTheme(theme);
  //   onSetTheme?.(theme);
  // }

  return <div className="min-h-screen bg-primary">{children}</div>;
}
