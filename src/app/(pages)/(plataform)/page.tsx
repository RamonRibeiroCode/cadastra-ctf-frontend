import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center mb-28">
        <h1 className="text-4xl text-white">Bem vindos ao Cadastra CTF</h1>

        <div className="flex space-x-4">
          <Link
            className="mt-6 flex items-center bg-primary-default rounded-lg px-6 py-4 space-x-2 text-neutral-gray hover:bg-[#212e48] hover:text-[#3699ff]"
            href="/challenges"
          >
            Desafios
          </Link>

          <Link
            className="mt-6 flex items-center bg-primary-default rounded-lg px-6 py-4 space-x-2 text-neutral-gray hover:bg-[#212e48] hover:text-[#3699ff]"
            href="/profile"
          >
            Perfil
          </Link>

          <Link
            className="mt-6 flex items-center bg-primary-default rounded-lg px-6 py-4 space-x-2 text-neutral-gray hover:bg-[#212e48] hover:text-[#3699ff]"
            href="/leaderboard"
          >
            Ranking
          </Link>
        </div>
      </div>
    </div>
  );
}
