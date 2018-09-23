import React from 'react'

const BlogListing = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<p>{props.author} - {props.date}</p>
		</div>
	)
}

export default BlogListing;