import { useQueries } from "react-query";
import TransactionService from "services/TransactionService";

const transactionsQueries = async (page) => {
  const data = await TransactionService.get(page);

  if (!data.ok) {
    throw Error(data.statusText);
  }

  return data.json();
};

export default function useTransactions(pages) {
  return useQueries(
    pages.map((page) => ({
      queryKey: ["transaction", page],
      queryFn: () => transactionsQueries(page),
    }))
  );
}
