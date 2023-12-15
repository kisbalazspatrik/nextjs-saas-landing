import Header from "../components/Header";
import Audience from "../sections/Audience";
import Features from "../sections/Features";
import Functions from "../sections/Functions";
import Product from "../sections/Product";

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Functions />
      <Audience />
      <Product />
    </main>
  );
}
