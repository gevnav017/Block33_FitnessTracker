const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const prisma = new PrismaClient();

const seedAuthors = () => {
    Array.from({ length: 10 }).map(async () => {
        await prisma.author.create({
            data: {
                name: faker.person.firstName(),
                email: faker.internet.email()
            }
        })
    })
}

seedAuthors()

const seedPosts = () => {
    Array.from({ length: 10 }).map(async () => {
        await prisma.post.create({
            data: {
                title: faker.lorem.word(7),
                author: {
                    connect: {id: 25}
                }
            }
        })
    })
}

seedPosts()