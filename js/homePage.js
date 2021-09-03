window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

//Template literal ES6 feature 
const createInnerHTML = () => {
    const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th>"+
                       "<th>ZipCode</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let addressbookList = createAddressBookJSON();

    for  ( const addressbookData of addressbookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${addressbookData._name}</td>
            <td>${addressbookData._address}</td>
            <td>${addressbookData._city}</td>
            <td>${addressbookData._state}</td>
            <td>${addressbookData._zipCode}</td>
            <td>${addressbookData._phoneNumber}</td>
            <td>
            <img name="${addressbookData._id}" onclick="removie(this)" alt="delete" 
                    src="../assests/icons/delete-black-18dp.svg">
            <img name="${addressbookData._id}" alt="edit" onclick="update(this)"
                    src="../assests/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}

//create Employee Payroll JSON objects
const createAddressBookJSON = () => {
    let addressbookList = [
        {
            _name : 'Bhavani',
            _address : 'Nitture,Peddapallly',
            _city : 'Hyderabad',
            _state : 'Telangana',
            _zipCode : '505174',
            _phoneNumber : '+919989464121',
            _id : new Date().getTime()
        },
        {
            _name : 'Harish',
            _address : 'Nitture,Peddapally',
            _city : 'Hyderabad',
            _state : 'Telangana',
            _zipCode : '505174',
            _phoneNumber : '+918341930630',
            _id : new Date().getTime()
        }
    ];
    return addressbookList;
} 