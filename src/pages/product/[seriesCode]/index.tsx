import Link from "next/link";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <h1>Product detail</h1>
      <h3>
        <Link href="/product/5678?Page=3">
          Link has query seriesCode=5678 and Page = 3
        </Link>
      </h3>
      <p>=============================</p>
      {Object.keys(router.query).map((key, index) => {
        return (
          <h2 key={index}>
            Key: {key} - Value: {query[key]}
          </h2>
        );
      })}
    </>
  );
};

export default ProductDetail;
export async function getServerSideProps() {
  return { props: {} };
}
