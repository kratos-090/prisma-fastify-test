const prisma = require("../db/db");
const bcrypt = require("bcrypt");

prisma.$use(async (params, next) => {
  try {
    if (
      params.model === "user" &&
      (params.action === "create" || params.action === "update")
    ) {
      const user = params.args.data;
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }

    const result = await next(params);

    return result;
  } catch (error) {
    console.log(error);
  }
});
