/**
 * Payment provider placeholders — wire Razorpay / Stripe / PayPal in server routes.
 * Never expose secret keys to the client.
 */

export const PAYMENT_PROVIDERS = ['razorpay', 'stripe', 'paypal', 'upi']

export function getDefaultCurrency() {
  return process.env.NEXT_PUBLIC_DEFAULT_CURRENCY || 'INR'
}

export function describeEmiPlans() {
  return [
    { months: 3, label: '3 months EMI', aprHint: '0% partner offers on select cards' },
    { months: 6, label: '6 months EMI', aprHint: 'Subject to bank approval' },
    { months: 12, label: '12 months EMI', aprHint: 'Subject to bank approval' },
  ]
}
