import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen w-full">
      <>
        <Sidebar />
        <div className="flex sm:hidden h-28" />
      </>
      {children}
    </div>
  );
}
