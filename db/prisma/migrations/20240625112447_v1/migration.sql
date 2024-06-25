-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "displayName" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Featured" (
    "id" TEXT NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "icon" VARCHAR(255) NOT NULL DEFAULT 'stars-02',

    CONSTRAINT "Featured_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "rating_count" DECIMAL(65,30) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "desc" TEXT NOT NULL,
    "images" TEXT[],
    "name" VARCHAR(255) NOT NULL,
    "price_range" VARCHAR(255) NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "featuredId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_featuredId_fkey" FOREIGN KEY ("featuredId") REFERENCES "Featured"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
