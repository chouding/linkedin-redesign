import Image from "next/image";

export default function Connection({
  name,
  title,
  avatar,
  mutual,
}: {
  name: string;
  title: string;
  avatar: string;
  mutual?: string;
}) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow p-4 gap-4 w-full max-w-lg hover:shadow-lg transition">
      <Image
        src={avatar}
        alt={name}
        width={128}
        height={128}
        className="rounded-full"
      />
      <div className="flex flex-col flex-1">
        <span className="font-semibold text-lg text-gray-900 truncate">{name}</span>
        <span className="text-sm text-gray-600 truncate">{title}</span>
        {mutual && (
          <span className="text-xs text-gray-400 mt-1 truncate">
            Mutual connection: {mutual}
          </span>
        )}
      </div>
      <button className="ml-2 px-4 py-2 rounded-full border-blue-400 border font-bold text-blue-600 font-semibold text-sm hover:bg-blue-100 transition">
        Message
      </button>
    </div>
  );
}