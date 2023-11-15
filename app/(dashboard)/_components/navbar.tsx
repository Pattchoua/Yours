import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "./mainNav";
import StoreSwitcher from "./storeSwitcher";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";


const Navbar = async() => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await db.store.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="border-b">
      <div className="p-4 h-16 flex items-center">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
