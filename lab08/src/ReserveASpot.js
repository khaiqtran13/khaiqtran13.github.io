const ReserveASpot = () => {
    return (
        <div id="reserve-a-spot" className="tabcontent">
            <h1>Reserve a Spot</h1>
            <div className="form-row">
                <div className="row">
                    <label for="enterFirstName">First Name</label>
                    <input type="text" class="form-control" placeholder="John" required></input>
                    <label for="enterLastName">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name" required></input>
                    <label for="enterEmailAddress">Email</label>
                    <input type="email" class="form-control" id="userEmail" placeholder="abc@gmail.com" required></input>
                    <label for="enterNumber">Phone Number</label>
                    <input type="phoneNumber" class="form-control" id="userPhoneNumber" placeholder="1 (xxx) xxx-xxxx" required></input>
                    <label for="date">Date</label>
                    <input type="text" placeholder="mm/dd/yyyy"></input> 
                </div>
            </div>
        </div>
    );
}
 
export default ReserveASpot;
