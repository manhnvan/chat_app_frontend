import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JoinView from './Components/JoinChatView/JoinView';
import Chatbox from './Components/ChatBox/Chatbox';

function App() {
	return (
		<Router>
			<Route path="/chat" exact component={JoinView} />
			<Route path="/" component={Chatbox} />
		</Router>
	);
}

export default App;
