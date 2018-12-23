import React, { Component } from 'react';
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input'
import Phone from 'react-phone-number-input'
import { Button, Label, Form, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.redirectToWhatsapp = this.redirectToWhatsapp.bind(this);
    }
    
    redirectToWhatsapp() {
        if (this.state.phone) {
            console.log('redirecting..');
            window.location = `https://api.WhatsApp.com/send?phone=${this.state.phone.slice(1)}`
        }
    }

    render() {
        return (
          <div className="container">
            <Header />
            <div>
                <Alert color="success">
                    <h3 className="alert-heading">Disclaimer</h3>
                    <p>
                        We do not collect your personal information. All information is stored on your device only.
                    </p>
                </Alert>
            </div>
	        <Form>
	            <div className="form-group">
	                <Label for="idPhone">Enter a number here and click on redirect to open in Whatsapp</Label>
    		        <Phone
    		            id="idPhone"
	    		        placeholder="Enter phone number"
	    		        value={ this.state.phone }
	    		        onChange={ phone => this.setState({ phone }) } />
	    		</div>
			    <Button disabled={!(this.state.phone && this.state.phone.length > 0 && isValidPhoneNumber(this.state.phone))} color="primary" onClick={this.redirectToWhatsapp}>
			        Redirect
			    </Button>
	        </Form>
          </div>
        );
    }
}

export default App;
