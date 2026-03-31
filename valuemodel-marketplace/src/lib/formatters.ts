export const formatPrice = (price: number, currency = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const generateLicenseKey = () => {
  return `VALU-${Date.now()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
};
