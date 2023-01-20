import prisma from './prisma';

export function getUser(id) {
	return prisma.user.findUnique({
		where: { id }
	});
}

export function getUserItems(id) {
	return prisma.item.findMany({
		where: { userId: id }
	});
}
