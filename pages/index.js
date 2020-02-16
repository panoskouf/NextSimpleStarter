import axios from 'axios'
import React from 'react'
import { NextSeo } from 'next-seo'
import Fork from '../components/Fork'
import Todo from '../components/Todo'

const Index = ({ stars }) => (
	<>
		<NextSeo
			title="NextSimpleStarter"
			description="Simple and Accessible PWA boilerplate with Nextjs 9 + React Hooks"
		/>
		<Fork stars={stars} />
		<Todo />
	</>
)

Index.getInitialProps = async () => {
	const res = await axios.get(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)

	return { stars: res.data.stargazers_count }
}

export default Index
