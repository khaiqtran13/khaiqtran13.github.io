const ContactUs = () => {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>
                Telephone: <a href="tel: 0">(613) 420-6969<br /></a>
                Fax: <a href="tel: 0">(613) 420-9696<br /></a>
                Email: <a href="mailto:#">613pools@ottawa.com</a><br />
                Mon-Fri: <strong>9:30-16:30</strong>
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.0746414587697!2d-75.74687818444714!3d45.32711517909952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce07762014c8d1%3A0xcbe3e5300c2decc!2sNepean%20Sportsplex!5e0!3m2!1sen!2sca!4v1625851093842!5m2!1sen!2sca"
            width="100%"
            height="450" 
            style={{ border: 0}} 
            allowfullscreen="" 
            loading="lazy" />
        </div>
    );
}
 
export default ContactUs;


