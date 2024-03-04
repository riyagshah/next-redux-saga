"use client"
import { ThemeProvider } from "next-themes"
interface Props {
  children: React.ReactNode
}
import { Provider } from 'react-redux';
import store from './Redux/store';

export default function Providers({ children }: Props) {
  return (
<Provider store={store}>
<ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
</Provider>
  )
}
