import {v4 as uuid} from 'uuid';

let contacts = [];

export const getContacts = (req, res) => {
    res.send(contacts);
};

export const createContact = (req, res) => {
    const contact = req.body;

    contacts.push({...contact, id: uuid()});
    res.send('Contact Added successfully')
};

export const getContact = (req, res) => {
    const singleContact = contacts.filter((contact) => contact.id === req.params.id);
    res.send(singleUser);
};

export const deleteContact = (req, res) => {
    contacts = contacts.filter((contact) => contact.id !== req.params.id);
    res.send('Contact Deleted successfully');
};

export const updateContact = (req, res) =>  {
    const contact = contacts.find((contact) => contact.id === req.params.id);

    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.contact = req.body.contact;

    res.send('Contact Updated successfully');

};