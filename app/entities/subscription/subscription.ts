export enum SubscriptionType {
  PRO = "pro",
}

type Subscription = {
  is_trial_activated: boolean;
  credits: number;
  subscription_type: SubscriptionType | undefined;
  last_credits_update: Date;
  stripe_customer_id: string;
};
export default Subscription;
