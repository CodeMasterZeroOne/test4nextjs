import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "The Boi's",
  description: 'Generated by Pawelski',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-slate-800 text-slate-300'>
      {/* added suppressHydrationWarning={true} to escape errors from extensions such as grammarly https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c */}
      <body className={inter.className} suppressHydrationWarning={true}><main className="bg-slate-800 text-slate-100 container mx-auto p-4" >{children}</main></body>
    </html>
  )
}
