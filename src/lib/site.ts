export const site = {
  name: "Saudia Transportation",
  domain: "saudiatransportation.com",
  phone: "+1 (872) 322-8435",
  phoneHref: "tel:+18723228435",
  email: "info.saudiatransportation@gmail.com",
  emailHref: "mailto:info.saudiatransportation@gmail.com",
  whatsappNumber: "18723228435", // digits only for wa.me
  defaultMessage: "Hello, I want to book a taxi. Please share details.",
  tagline: "Serving pilgrims with safe and reliable transport",
};

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? site.defaultMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
