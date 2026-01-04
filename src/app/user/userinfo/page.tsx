import { Infobox } from "@/app/user/userinfo/infobox";

export default function UserInfoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6
      bg-gradient-to-br from-[#1f66e5] via-[#2e86f5] to-[#4db7ff]">
      <div className="w-full max-w-sm">
        <Infobox />
      </div>
    </div>
  );
}