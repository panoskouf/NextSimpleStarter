import axios from 'axios'
import React from 'react'
import Fork from '../components/Fork'
import Todo from '../components/Todo'

const Index = ({ stars }) => (
	<React.Fragment>
		<Fork stars={stars} />
		<Todo />
	</React.Fragment>
)

Index.getInitialProps = async () => {
	const res = await axios.get(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)

	return { stars: res.data.stargazers_count }
}

export default Index
