import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { log } from './store/reducers/latest/latestSlice'

import './styles/global.css'

function App() {
	const name = useSelector((state: RootState) => state.latestReducer.name)
	console.log(name)
	const dispatch = useDispatch()
	return (
		<div>
			<p onClick={() => dispatch(log(1))}>111</p>
		</div>
	)
}

export default App
