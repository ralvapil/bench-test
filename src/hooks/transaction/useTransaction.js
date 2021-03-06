import { useQuery } from "react-query";
import TransactionService from "services/TransactionService";

const transactionQuery = async (params) => {
  const { queryKey } = params;
  const { 1: page } = queryKey;

  const data = await TransactionService.get(page);

  if (!data.ok) {
    throw Error(data.statusText);
  }

  return data.json();
};

export default function useTransaction(page) {
  return useQuery(["transaction", page], transactionQuery);
}
