import { ListItemTypes } from './list-item-types.enum';

export interface ListItem {
    name: string;
    description: string;
    icon: string;
    type: ListItemTypes;
    disabled: boolean;
    links: {
        ios?: string;
        android?: string;
        file?: string;
        url?: string;
    };
}
