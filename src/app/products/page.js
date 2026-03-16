"use client";

import "@/styles/products.css";
import PageHeader from "@/components/shared/PageHeader";
import ProductsContent from "@/components/products/ProductsContent";

export default function Products() {
  return (
    <>
      <PageHeader className="products-ripple" imageClass="products-image ripple-effect" title="Products" />
      <ProductsContent />
    </>
  );
}
