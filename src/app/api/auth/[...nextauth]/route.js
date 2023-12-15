import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      // Fungsi ini akan dipanggil setelah pengguna berhasil masuk
      // Tempatkan logika kustom Anda di sini
      return Promise.resolve(true);
    },
    async redirect(url, baseUrl) {
      // Fungsi ini akan dipanggil setelah signIn dan dijalankan setelah signIn berhasil
      // URL adalah halaman yang harus diarahkan setelah masuk

      // Ganti "/contact" dengan halaman yang diinginkan
      return Promise.resolve("/");
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
