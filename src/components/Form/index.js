import React from 'react';
import axios from 'axios';


class Form extends React.Component {
    state = {
        email: '',
        file: null
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleFile = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        const { email } = this.state;
        data.append('file', this.state.file);
        axios.post('http://localhost:2019/api/uploadProfile', { email: email, file: data }).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" onChange={this.handleEmail} />
                    <label>Profile Image:</label>
                    <input type="file" name="file" onChange={this.handleFile} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Form;