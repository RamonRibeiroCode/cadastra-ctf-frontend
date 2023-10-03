import FeedPost from "../../components/FeedPost";

export default function Feed() {
  return (
    <div className="flex max-w-[945px] mx-auto mt-16">
      <ul className="w-full">
        {[1, 2, 3, 4].map((feed) => (
          <FeedPost key={feed} />
        ))}
      </ul>
    </div>
  );
}
