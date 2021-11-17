import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    // field contains event handler that we need to wire up to the JSX that we're returning
    renderTitleField(field){  // return JSX, but wire up JSX to the field component
        return (
            <div>
                <input
                    type="text"
                   {...field.input} 
                />
            </div>
        );
    }

    render(){
        return(
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}  // providing reference
                />
            </form>
        );
    }
}

export default PostsNew;