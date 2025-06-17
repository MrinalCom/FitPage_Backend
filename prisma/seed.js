// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Seed users
  const users = await prisma.user.createMany({
    data: [{ username: "Alice" }, { username: "Bob" }, { username: "Charlie" }],
  });
  await prisma.product.createMany({
    data: [
      {
        name: "Apple iPhone 15 Pro",
        description:
          "Flagship smartphone with A17 Pro chip and triple camera system.",
        image_url:
          "https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&quality=85&auto=format&fit=max&s=b22571000e55d1bbaa6ef55b5122a59e",
      },
      {
        name: "Sony WH-1000XM5",
        description: "Industry-leading noise-canceling wireless headphones.",
        image_url:
          "https://xtrasure.store/cdn/shop/files/Sony_WH-1000XM5_Wireless_Over-ear_Industry_Leading_Noise_Canceling_Headphones_with_Microphone.jpg?v=1721903658",
      },
      {
        name: "Dell XPS 13",
        description:
          "Compact and powerful ultrabook with InfinityEdge display.",
        image_url:
          "https://hilaptop.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUNVQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--86b87821dbfd026c7d5fe6a56c482fc279b5a01d/xps12th.jpg",
      },
      {
        name: "Samsung Galaxy Watch 6",
        description: "Premium smartwatch with health tracking and Wear OS.",
        image_url:
          "https://southport.in/cdn/shop/files/Watch6-40mm-Gold.jpg?v=1692194014",
      },
      {
        name: "GoPro HERO12 Black",
        description:
          "Advanced action camera with 5.3K video and HyperSmooth 6.0.",
        image_url:
          "https://media.croma.com/image/upload/v1718790477/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/300424_6_zctqqz.png",
      },
    ],
  });

  console.log("🌱 Seeded product data with real images!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
