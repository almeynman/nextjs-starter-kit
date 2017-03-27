import createBrowserHistory from 'history/createBrowserHistory';

export default (typeof window !== 'undefined') && createBrowserHistory();
