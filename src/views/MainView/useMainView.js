import { parse, isAfter } from 'date-fns';
import { useTransaction, useTransactions } from 'hooks/transaction';

function getRemainingPages(totalCount) {
  if (!totalCount) {
    return [];
  }

  const pageList = [];

  // total count / num of transactions per page = number of total pages
  // round up result and reduce by 1 as we already have page 1's data
  const remainingPagesCount = Math.ceil(totalCount / 10) - 1;

  // create a list of the remaining pages [2, 3, 4, etc]
  for (let i = 2; i < remainingPagesCount + 2; i++) {
    pageList.push(i);
  }

  return pageList;
}

function mergeTransactionLists(pg1Data, queries) {
  const transactions = [];

  if (pg1Data?.isSuccess) {
    transactions.push(pg1Data.transactions);
  }

  if (queries?.[0]?.isSuccess) {
    transactions.push(...queries.map((query) => query.data?.transactions));
  }

  return transactions;
}

function processTransactionsData(transactions) {
  return transactions
    .map((transaction) => ({
      ...transaction,
      Date: parse(transaction.Date, 'yyyy-MM-dd', new Date()),
      Amount: parseFloat(transaction.Amount, 10),
    }))
    .sort((a, b) => (isAfter(b.Date, a.Date) ? 1 : -1));
}

function queriesIsSuccess(queries) {
  return queries.every((query) => query.isSuccess);
}

export default function useMainView() {
  // start with page 1 of transactions to find out how many other api calls are required
  const {
    data: pg1Data,
    isSuccess: pg1IsSuccess,
    isLoading: pg1IsLoading,
    isError: pg1IsError,
  } = useTransaction(1);

  const remainingPages = getRemainingPages(pg1Data?.totalCount);
  const remainingTransactionsQueries = useTransactions(remainingPages);

  let paginatedTransactions = [];
  let transactions = [];

  if (pg1IsSuccess && queriesIsSuccess(remainingTransactionsQueries)) {
    paginatedTransactions = mergeTransactionLists(
      pg1Data,
      remainingTransactionsQueries
    );

    transactions = processTransactionsData(paginatedTransactions.flat());
  }

  return {
    isLoading:
      pg1IsLoading ||
      remainingTransactionsQueries.some((query) => query.isLoading),
    isSuccess: pg1IsSuccess && queriesIsSuccess(remainingTransactionsQueries),
    isError:
      pg1IsError || remainingTransactionsQueries.some((query) => query.isError),
    data: transactions,
  };
}
