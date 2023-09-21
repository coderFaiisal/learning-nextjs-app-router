import Sidebar from "@/components/shared/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="min-h-screen text-3xl w-full">{children}</div>
    </div>
  );
}
