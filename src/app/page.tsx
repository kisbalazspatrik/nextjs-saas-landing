import Header from "../components/Header";
import Audience from "../components/Audience";
import Features from "../components/Features";
import Functions from "../components/Functions";
import Product from "../components/Product";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Functions />
      <Audience />
      <Product />
      <Pricing />
    </main>
  );
}
