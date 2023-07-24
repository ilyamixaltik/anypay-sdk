import { Currency } from './currency.type';

export type Merchant = {
  merchant: number;
	pay_id: number;
	amount: number;
	currency?: Currency;
	desc?: string;
	email?: string;
	phone?: number;
	method?: string;
	success_url?: string;
	lang?: string;
	sign: string;
}
