import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { startups_query } from "@/sanity/lib/queries";
import StartupCardType from "@/types/post";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

	const posts = await client.fetch(startups_query);

  console.log(JSON.stringify(posts, null, 2));
  return (
    <>
      <section className="pink_container bg-primary">
        <h1 className="heading">
          Pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Ideas Noticed In Virtual
          Competition.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
