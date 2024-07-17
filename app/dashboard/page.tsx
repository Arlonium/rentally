import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import CreateSocietyDialog from '@/components/alx/CreateSocietyDialog';

export default async function Dashboard() {
    const session = await auth();
    if (!session) return <div>Loading...</div>;

    const userId = session.user?.id;

    const societies = await prisma.society.findMany({
        where: { ownerId: userId },
        include: { houses: true },
    });

    const userHouses = await prisma.house.findMany({
        where: { ownerId: userId, societyId: null },
        include: { owner: true },
    });

    const societyHouses = societies.flatMap((society) => society.houses);
    const housesWithoutSociety = userHouses.filter((house) => !societyHouses.includes(house));

    const tenants = await prisma.tenant.findMany({
        where: {
            house: {
                ownerId: userId,
            },
        },
    });

    return (
        <div>
            <CreateSocietyDialog />
        </div>
    );
}
