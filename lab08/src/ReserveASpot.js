import React, { Component } from "react";
import MyDatePicker from './MyDatePicker';
import reserve_icon from './images/reserve.png';

// from https://dev.to/anilsingh/allow-only-numbers-in-input-in-react-2m71
class AllowOnlyNumber extends Component {
    constructor(props) {
        super(props);
        this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);  
        this.state = {
            telephone: '',
            regexp : /^[0-9\b]+$/
        }   
    }
    
    onHandleTelephoneChange = e => {
        let telephone = e.target.value;

        // if value is not blank, then test the regex
        if (telephone === '' || this.state.regexp.test(telephone)) {
            this.setState({ [e.target.name]: telephone })
        }
    };

    render() {
        return (
            <>
                < input
                    type="tel" name="telephone" placeholder="1 (xxx) xxx-xxxx"
                    className="form-control"
                    value={this.state.telephone}
                    onChange={this.onHandleTelephoneChange}
                    required
                />
            </>
        );
    }
}

const ReserveASpot = () => {
    const [selected, setSelected] = React.useState(""); 
    // function will set different values to state variable based on dropdown
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

    // arrays for different dropdowns
    const swimTimesLane = [
        "7:30 - 9:00", "11:00 - 14:00", "19:30 - 22:00"
    ];
    
    const swimTimesLeisure = [
        "14:15 - 16:00", "17:00 - 19:00"
    ];

    let type = null; // stores the arrays
    let options = null; // stores the options

    if (selected === "Lane Swim") {
        type = swimTimesLane;
    } else if (selected === "Leisure Swim") {
        type = swimTimesLeisure;
    }

    // maps options
    if (type) {
        options = type.map((el => <option key={el}>{el}</option>));
    }

    return (
        <div id="reserve-a-spot" className="tabcontent">
            <img src={reserve_icon} className="image"/>
            <h2>Reserve a Spot</h2>
                <div className="form-row">
                    <form className="row g-2 needs-validation"> 
                        <label for="enterFirstName">First Name</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="John" required></input>
                        <label for="enterLastName">Last Name</label>
                        <input type="text" className="form-control" placeholder="Doe" required></input>
                        <label for="enterEmailAddress">Email</label>
                        <input type="email" className="form-control" id="userEmail" placeholder="abc@gmail.com" required></input>
                        <label for="enterNumber">Phone Number</label>
                        {/* <input type="phoneNumber" className="form-control" id="userPhoneNumber" placeholder="1 (xxx) xxx-xxxx" required></input> */}
                        <AllowOnlyNumber />
                        <label for="date" s>Date</label>
                        <MyDatePicker  placeholder="mm/dd/yyyy"/>
                        <label for="swim-type">Swim Type</label>
                        <select className="form-control" onChange={changeSelectOptionHandler}>
                            <option></option>
                            <option>Lane Swim</option>
                            <option>Leisure Swim</option>
                        </select>
                        <label for="swim-time">Swim Time</label>
                        <select className="form-control">
                            {options}
                        </select>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
        </div>
    );
}


export default ReserveASpot;
