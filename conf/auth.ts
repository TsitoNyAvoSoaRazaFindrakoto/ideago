import { client } from "@/sanity/lib/client";
import { author_by_github_id_query } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user: { name, email, image },
      profile: { id, login, bio },
    }) {
      const existingUser = await client.fetch(author_by_github_id_query, {
        id: id,
      });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      if (existingUser) return true;
    },
    async jwt({ token, profile, account }) {
      if (account && profile) {
        const user = await client.fetch(author_by_github_id_query, {
          id: profile.id,
				});
				
				token.id = user._id;
      }
		},
		async session({ session, token }) {
			Object.assign(session, { id: token.id });
			return session;
		}
  },
});
