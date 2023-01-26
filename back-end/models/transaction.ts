import { TimeInterval } from "./time-intervals";
import { TransactionType } from "./transaction-types";

export interface Transaction{

    type: TransactionType,
    date: Date,
    interval : TimeInterval

}