import ChallengeListItem from "../../components/ChallengeListItem";
import { challengesMock } from "../../mocks/challenges";

export default function Challenges() {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto">
        <ul className="grid grid-cols-3 gap-7">
          {challengesMock.map((challenge) => (
            <ChallengeListItem
              key={challenge.releaseDate}
              id={challenge.id}
              creatorIconUrl={challenge.creatorIconUrl}
              difficulty={challenge.difficulty}
              iconUrl={challenge.iconUrl}
              releaseDate={challenge.releaseDate}
              title={challenge.title}
              xp={challenge.xp}
              firstBloodIconUrl={challenge.firstBlood.iconUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
