const createUser = (e) => {
    e.preventDefault();
    let user = {
        email: $('input[name="email"]').val()
    };
    $.ajax({
        url: '/api/user',
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

const readAllUser = () => {
    $.ajax({
        url: '/api/user/',
        type: 'get',
        dataType: 'application/json',
        data: {},
        success: (data) => {
            console.log(data);
            alert("success");
        },
        error: (err) => {
            console.log(err);
        }
    });
};

const readUserByEmail = () => {
    let email = $('input[name="email"]').val();
    $.ajax({
        url: '/api/user/' + email,
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
$("#formular").submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "/users/bild",
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){
            console.log("result",r)
        },
        error: function (e) {
            console.log("some error", e);
        }
    });

});
const createItem = (e) => {
    e.preventDefault();
    let formData = new FormData($('#createItemForm')[0]);
    $.ajax({
        url: '/api/item',
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

const readAllItem = (e) => {
    e.preventDefault();
    $.ajax({
        url: '/api/item',
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

const createOrder = () => {
    let email = $('input[name="email"]').val();
    let itemId = $('input[name="itemId"]').val();
    $.ajax({
        url: '/api/user/' + email + '/order',
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


$('#createUserForm').submit(createUser);
$('#createItemForm').submit(createItem);
$('#createOrderForm').submit(createOrder);