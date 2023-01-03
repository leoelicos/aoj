export const formatPrice = (cents) => `$${Math.floor(cents / 100)}.${String(Math.floor(cents) % 100).padStart(2, '0')}`
