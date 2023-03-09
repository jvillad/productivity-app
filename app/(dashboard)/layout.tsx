import Panel from '@/components/Panel';
import '@/styles/global.css';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <Panel className="w-full h-full flex items-center justify-center">
          <Sidebar />
          {children}
        </Panel>
      </body>
    </html>
  );
}
