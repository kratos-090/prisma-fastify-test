const prisma = require('../db/db');

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            },
        });
        res.status(201).send({
            success: true,
            user
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
}