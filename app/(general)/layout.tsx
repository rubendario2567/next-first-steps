import { Navbar } from "@/components";

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <h1>Hello world</h1>
        { children }
      </main>
    </>
  );
}