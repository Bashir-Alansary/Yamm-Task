export type ItemType = {
    name: string;
    id: string;
    price: number;
    quantity: number;
}

export type OrderType = {
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    decision: null;
    Items: ItemType[];
}

export type DecisionItemType = {
    id: number;
    name: string;
    value: string;
}