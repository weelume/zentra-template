export type Copy = { zh: string; en: string }
export const text = (zh: string, en: string): Copy => ({ zh, en })
export const brand = {
  name: text('Zentra', 'Zentra'),
  email: 'hello@zentragency.com', phone: '+1 (234) 567-8900',
  address: text('洛杉矶 Market 街 123 号', '123 Market St, Los Angeles, CA'),
  tagline: text('让品牌被看见 让创意带来增长', 'Brand new waves.'),
}
export const asset = (name: string) => `/templates/zentra/assets/${name}`
