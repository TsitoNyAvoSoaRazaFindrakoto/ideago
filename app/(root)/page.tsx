import SearchForm from "@/components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
	const query = (await searchParams).query;
	
	const posts = [{
		_createdAt: 'Yesterday',
		views: 55,
		author: { _id: 1 },
		_id : 1,
		description: "This is a description",
		image: 'https://unsplash.com/photos/person-holding-light-bulb-fIq0tET6llw',
		category: 'Robots',
		title : 'Robotics Startup',
	}]
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
					{query ? `Search results for "${query}"` : 'All Startups'}
					
					<ul className="mt-7 card_grid">

					</ul>
				</p>
			</section>
    </>
  );
};

export default Home;
