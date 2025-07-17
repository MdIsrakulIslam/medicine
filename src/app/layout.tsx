import './globals.css';
import { Provider } from 'react-redux';
import ReduxProvider from './redux-provider';
import { store } from './redux/store';

export const metadata = {
  title: 'LAMARE Dashboard',
  description: 'Healthcare Admin Panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}