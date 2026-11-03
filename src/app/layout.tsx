import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Zentra', description: 'Zentra responsive bilingual website' }
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="zh-CN"><body>{children}</body></html> }
