import { useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../store/coinsApiSlice";

function CoinDetail() {
  const { coinId } = useParams();

  // TODO the query is not creating corret URL
  const { data, loading, error } = useGetCoinDetailsQuery(coinId);
  console.warn({
    data,
    loading,
    error,
  });
  return (
    <div>
      <h1>Coins Details Page</h1>
      <h2> {coinId} was clicked </h2>
      <p>This page is not done yet, having some issues with url.</p>
    </div>
  );
}

export default CoinDetail;
