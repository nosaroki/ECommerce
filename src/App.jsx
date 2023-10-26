import ProductList from "./components/ProductList";
import FloatingCartButton from "./components/FloatingCartButton";

function App() {
  return (
    <>
    <div className="min-h-screen bg-orange-700 opacity-75">
      <div className="max-w-4xl mx-auto pt-14">
        <ProductList />
      </div>
    </div>
    <FloatingCartButton />
    </>
  );
}

export default App;
