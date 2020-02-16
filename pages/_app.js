import React from 'react'
import ReactDom from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'
import Provider from '../contexts'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import SEO from '../next-seo.config'

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {})
			}
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDom, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		const theme = createMuiTheme({
			palette: {
				background: {
					default: '#EEE'
				},
				primary: {
					main: '#673ab7'
				}
			}
		})

		return (
			<>
				<DefaultSeo {...SEO} />
				<Head>
					<title>Todo App</title>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline>
						<Provider>
							<Component {...pageProps} />
						</Provider>
					</CssBaseline>
				</ThemeProvider>
			</>
		)
	}
}
