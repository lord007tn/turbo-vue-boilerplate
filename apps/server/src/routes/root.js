module.exports = async (fastify, opts) => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["test"],
        response: {
          "2xx": {
            type: "object",
            properties: {
              message: {
                type: "string",
              },
            },
          },
        },
      },
    },
    async function (request, reply) {
      return reply.status(200).send("OK");
    }
  );
};
