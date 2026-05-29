import { Suspense } from "react";
import Header from "./Header";
import { getMenuData } from "@/lib/menu";

async function HeaderFetcher() {
  try {
    const menuData = await getMenuData();
    return <Header menuData={menuData} />;
  } catch (error) {
    console.error("Header fetcher error:", error);
    return <Header menuData={[]} />;
  }
}

export default function HeaderServer() {
  return (
    // By using the real Header component with an empty menu array as the fallback,
    // we guarantee 100% identical styling, padding, classes, and exact height.
    <Suspense fallback={<Header menuData={[]} />}>
      <HeaderFetcher />
    </Suspense>
  );
}
