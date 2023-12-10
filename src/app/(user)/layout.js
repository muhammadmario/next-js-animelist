import Navbar from "@/components/Navbar";

export default function UserLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
