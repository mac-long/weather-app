import prisma from './prisma';

export function getUser(id) {
	return prisma.user.findUnique({
		where: { id }
	});
}
