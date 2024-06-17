import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'DEV EXP | JavaScript ',
  description: 'Veja o que já escrevemos sobre JavaScript.',
};

export default function LayoutJavaScript({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
