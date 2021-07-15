import aboutus_icon from './images/aboutus.jpeg'

const Home = () => {
    return (
        <div className="home">
            <div style={{display: 'inline-block'}}>
                <img src={aboutus_icon} className="image"/><h2>About Us</h2>
            </div>
            <p>
                613 Pools is located in Ottawa, Ontario an is an olympic sized swimming pool perfect for atheletes to train in. 613 Pools is open for lane swims, leisure swims and club bookings.<br /><br />
                613 Pools understands the importance of the quality of your swim time and nothing is more frustrating that a crowded lane; that's why we use a reservation system.<br /><br />
                To book a timeslot please click on "Reserve a Spot" in the navigation bar at the top, or feel free to explore the website!
            </p>
        </div>
    );
}
 
export default Home;

