import { Header } from '@/components';

export function RaeLayout({ ...props }) {
  const { storedTheme, children } = props;

  // Uncomment these functions to enable theme toggling
  // const [_, setSelectedTheme] = useState(
  //   storedTheme || 'theme-dark',
  // );
  // function handleSetTheme(theme: string) {
  //   setSelectedTheme(theme);
  //   onSetTheme?.(theme);
  // }

  return (
    <div className="min-h-screen bg-primary">
      <Header theme={storedTheme} />
      {children}
    </div>
  );
}
