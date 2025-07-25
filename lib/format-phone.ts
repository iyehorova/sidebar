export const formatUSPhoneNumber = (phone: string | number): string => {
  const digits = phone.toString().replace(/\D/g, '');

  const normalized = digits.startsWith('1') && digits.length === 11
    ? digits.slice(1)
    : digits;

  return normalized.length === 10
    ? normalized.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3')
    : phone.toString();
};
