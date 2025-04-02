import "./ContactForm.css";

const ContactForm = () => {
	return (
		<form action="" className="contact-form">
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" />
			<label htmlFor="email">Email</label>
			<input type="email" name="email" id="email" />
			<label htmlFor="subject">Subject</label>
			<input type="text" name="subject" id="subject" />
			<label htmlFor="message">Message</label>
			<textarea name="message" id="message"></textarea>
			<div>
				<input type="checkbox" name="consent-checkbox" id="consent-checkbox" />
				<label htmlFor="consent-checkbox">
					Consent to be contacted and acknowledge your information will
					be securely stored.
				</label>
			</div>
      <input type="submit" value="Submit" id="submit" />
		</form>
	);
};

export default ContactForm;
