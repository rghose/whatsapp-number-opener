import React, { Component } from 'react';
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input'
import Phone from 'react-phone-number-input'
import { Button, Label, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

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
						<h3>Contact via WhatsApp without saving contact number</h3>
						<p>
							Tired of saving numbers every time you want to whatsapp somebody? Say goodbye to saving contacts and use WhatsApp Number Opener to text any number you want
						</p>
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
		<Footer />
          </div>
        );
    }
}

export default App;
