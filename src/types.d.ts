export interface Transaction {
    id?: string;
    category: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
    createdAt: string;
}
