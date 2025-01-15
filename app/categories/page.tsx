import ProductCard from "@/components/atoms/ProductCard";

export default function Categories() {
  const products = [
    {id:"1",productTitle:"Product A", buttonTitle:"Details A"},
    {id:"2",productTitle:"Product B", buttonTitle:"Details B"},
    {id:"3",productTitle:"Product C", buttonTitle:"Details C"},
  ]
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="flex gap-4">
      {products.map((product, index:number) => (
        <ProductCard key={index} productTitle={product.productTitle} buttonTitle={product.buttonTitle} id={product.id}/>
      ))}
      </div>
     
    </div>
  );
}
