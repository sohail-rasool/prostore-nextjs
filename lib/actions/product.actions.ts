import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { convertToPlainObject } from "../utils";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export const fetchLatestProduct = async () => {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
};

// Get single product by slug
export async function getProductBySlug(slug: string) {
  const data =  await prisma.product.findFirst({
    where: { slug: slug },
  });
  return convertToPlainObject(data);
}
