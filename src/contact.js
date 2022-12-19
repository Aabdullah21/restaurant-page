export default function appentToContact() {
    const contact = createContactDiv();
    const phoneNumber = contactInfo("Phone Number: +966 57 217 0074")
    const email = contactInfo("Email: abdullah21707@gmail.com");
    contact.appendChild(phoneNumber);
    contact.appendChild(email);
    return contact
}
function createContactDiv() {
    const contact = document.createElement('div');
    contact.id = 'contact-content';
    return contact;
}

function contactInfo(message) {
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    return paragraph;
}