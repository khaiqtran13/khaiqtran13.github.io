import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

const ReserveASpot = () => {
    return (
        <div id="reserve-a-spot" className="tabcontent">
            <h2>Reserve a Spot</h2>

                <div className="form-row">
                    {/* noValidate */}
                    <form className="row g-2 needs-validation"> 
                        <label for="enterFirstName">First Name</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="John" required></input>
                        <label for="enterLastName">Last Name</label>
                        <input type="text" className="form-control" placeholder="Doe" required></input>
                        <label for="enterEmailAddress">Email</label>
                        <input type="email" className="form-control" id="userEmail" placeholder="abc@gmail.com" required></input>
                        <label for="enterNumber">Phone Number</label>
                        <input type="phoneNumber" className="form-control" id="userPhoneNumber" placeholder="1 (xxx) xxx-xxxx" required></input>
                        <label for="date">Date</label>
                        {/* <input type="text" className="form-control" placeholder="mm/dd/yyyy"></input>  */}
                        <DatePicker />
                        <button className="btn btn-primary" type="submit">Submit</button>   
                        
                    </form>
                </div>
        </div>
    );
}


export default ReserveASpot;
