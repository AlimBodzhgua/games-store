import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBounadry/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<ErrorBoundary>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
	</ErrorBoundary>
);
