import React from "react";
import Header from "components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <Header />
      <main className="min-h-full w-full overflow-y-auto">{children}</main>
    </div>
  );
}

export default Layout;
