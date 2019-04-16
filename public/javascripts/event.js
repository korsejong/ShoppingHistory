const createUser = (e) => {
    e.preventDefault();
    let user = {
        email: $('input[name="email"]').val()
    };
    $.ajax({
        url: '/api/users',
        type: 'post',
        dataType: 'application/json',
        data: user,
        success: (data) => {
            console.log(data);
            alert("success");
        },
        error: (err) => {
            console.log(err);
        }
    });
    return false;
};
const createOrder = () => {
    let id = $('input[name="id"]').val();
    let itemId = $('input[name="itemId"]').val();
    $.ajax({
        url: '/api/users/' + id + '/orders',
        type: 'post',
        dataType: 'application/json',
        data: {itemId : itemId},
        success: (data) =>{
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
    return false;
};
const createItem = (e) => {
    e.preventDefault();
    let formData = new FormData($('#createItemForm')[0]);
    $.ajax({
        url: '/api/items',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
    return false;
};

const readAllUsers = () => {
    $.ajax({
        url: '/api/users',
        type: 'get',
        dataType: 'application/json',
        data: {},
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readUserByEmail = (email) => {
    $.ajax({
        url: '/api/users/'+email,
        type: 'get',
        dataType: 'application/json',
        data: {},
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readAllItems = () => {
    $.ajax({
        url: '/api/items',
        type: 'get',
        dataType: 'json',
        data: {},
        success: (data) =>{
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};




$('#createUserForm').submit(createUser);
$('#createItemForm').submit(createItem);
$('#createOrderForm').submit(createOrder);