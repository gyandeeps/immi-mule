export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export enum TransactionStatus {
    INPROGRESS = "INPROGRESS",
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
