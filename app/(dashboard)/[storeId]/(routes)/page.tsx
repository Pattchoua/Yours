import { db } from "@/lib/db";

interface DasboarPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DasboarPageProps> = async ({ params }) => {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
