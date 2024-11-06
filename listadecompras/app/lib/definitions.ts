export interface ItemData {
    name: string;
    quantity: number;
    checked: boolean;
};

export type Item = ItemData & {
    id: string;
};

export interface Res {
    status: boolean;
    errors: string[];
};