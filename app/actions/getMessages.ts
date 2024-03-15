import prisma from "@/app/libs/prismadb"

const getMessages = async (
    convesationId: string
) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId: convesationId
            },
            include: {
                sender: true,
                seen: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        })

        return messages;
    } catch {
        return [];
    }
}

export default getMessages;