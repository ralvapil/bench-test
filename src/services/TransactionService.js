export default class TransactionService {
  static async get(page) {
    return fetch(`https://resttest.bench.co/transactions/${page}.json`);
  }
}
