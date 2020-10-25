import React, {Component} from 'react';
import ItemList from '../itemList/itemList';
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {
    
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
            onItemSelected={(itemId) => {
                this.props.history.push(`/books/${itemId}`)
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
    }
}

export default withRouter(BookPage)