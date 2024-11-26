import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    console.log('title:', context.searchByTitle);
    console.log('category: ', context.searchByCategory);
    
    if (
      context.searchByTitle?.length > 0 ||
      context.searchByCategory?.length > 0 ||
      (context.searchByTitle?.length > 0 &&
        context.searchByCategory?.length > 0)
    ) {
      console.log('dentro del primer if');
      
      if (context.filteredItems?.length > 0) {
        console.log('dentro del segundo if');
        return context.filteredItems?.map((item, i) => (
          <Card key={i} data={item} />
        ));
      } else {
        return <div>We don't have anything :(</div>;
      }
    } else {
      return context.items?.map((item, i) => <Card key={i} data={item} />);
    }
  };

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      {context.isProductDetailopen && <ProductDetail />}
    </Layout>
  );
}

export default Home;
