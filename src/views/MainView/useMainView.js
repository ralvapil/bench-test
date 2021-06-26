import { parse, isAfter } from 'date-fns';
import { useTransaction, useTransactions } from 'hooks/transaction';

function formatAmount(amount) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(parseFloat(amount, 10));
}

function getRemainingPages(totalCount) {
  const count = totalCount || 0;
  // total count / num of transactions per page = number of total pages
  // round up result and reduce by 1 as we already have page 1's data
  const remainingPagesCount = Math.ceil(count / 10) - 1;

  const pageList = [];

  for (let i = 2; i <= remainingPagesCount + 1; i++) {
    pageList.push(i);
  }

  return pageList;
}

function mergeTransactionList(page1Data, queries) {
  const transactions = [];

  if (page1Data) transactions.push(page1Data.transactions);

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
      Amount: formatAmount(transaction.Amount),
    }))
    .sort((a, b) => (isAfter(b.Date, a.Date) ? 1 : -1));
}

export default function useMainView() {
  const {
    data: page1Data,
    isSuccess: page1IsSuccessful,
    isLoading: page1IsLoading,
  } = useTransaction(1);

  const remainingPages = getRemainingPages(page1Data?.totalCount);
  const remainingTransactionsQueries = useTransactions(remainingPages);

  const transactions = mergeTransactionList(
    page1Data,
    remainingTransactionsQueries
  );

  const data =
    page1IsSuccessful &&
    remainingTransactionsQueries
      .map((query) => query.isSuccess)
      .every((isSuccess) => isSuccess === true) &&
    processTransactionsData(transactions.flat());

  return {
    isLoading:
      page1IsLoading ||
      remainingTransactionsQueries.some((query) => query.isLoading),
    data,
  };
}
