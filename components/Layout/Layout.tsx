import React from "react";
import Header from "components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <Header />
      <div className="grow overflow-y-auto">
        <main className="container mx-auto h-full min-h-full w-full px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
