import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

export default function UserLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Navbar />
      <Search />
      {children}
    </section>
  );
}
