import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ReactQueryDevtools initialIsOpen={false} /> {/* 왼쪽 하단 devtools */}
				<Component {...pageProps} />
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default MyApp;
