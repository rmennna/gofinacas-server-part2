// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import { getCustomRepository, TransactionRepository } from 'typeorm'
import TransactionsRepository from '../repositories/TransactionsRepository'
import { response } from 'express';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({ title, value, type, category }: Request): Promise<Transaction> {

    const transactionRepository = getCustomRepository(TransactionsRepository)

    const transaction = transactionRepository.create({
      title,
      value,
      type,
    });

    await transactionRepository.save(transaction)

    return transaction;
  }
}

export default CreateTransactionService;
