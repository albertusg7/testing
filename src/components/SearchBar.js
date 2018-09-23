import React from 'react'

const styles = {
	inputSearch:{
		width:320,
		height:30,
		margin:'auto',
		borderRadius:5,
	}
}  

const SearchBar = props => {
	return(
		<div style={{display:'flex'}}>
			<input 
				style={styles.inputSearch}
				type="text" 
				placeholder="Search Anything..." 
				onChange={props.onChangeSearch}
			/>
		</div>
	)
}

export default SearchBar;