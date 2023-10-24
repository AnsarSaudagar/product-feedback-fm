import { Comments } from "./comment.model";

export interface Product {
    id: number;
    title?: string;
    category?: string;
    upvotes?: number;
    status?: string;
    description?: string;
    comments?: Comments[]
}
