import Panel from '@/components/Panel';
import '@/styles/global.css';

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <Panel className="w-full h-full flex items-center justify-center">
          {children}
        </Panel>
      </body>
    </html>
  );
}
