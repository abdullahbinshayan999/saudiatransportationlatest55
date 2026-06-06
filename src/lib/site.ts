export const site = {
  name: "Saudia Transportation",
  domain: "saudiatransportation.com",
  phone: "+966 5X XXX XXXX",
  phoneHref: "tel:+9665XXXXXXXX",
  email: "info.saudiatransportation@gmail.com",
  emailHref: "mailto:info.saudiatransportation@gmail.com",
  whatsappNumber: "9665XXXXXXXX", // digits only for wa.me
  defaultMessage: "Hello, I want to book a taxi. Please share details.",
  tagline: "Serving pilgrims with safe and reliable transport",
};

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? site.defaultMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
