const createUser = (e) => {
    e.preventDefault();
    let user = {
        email: $('input[name="email"]').val()
    };
    $.ajax({
        url: '/api/users',
        type: 'post',
        dataType: 'json',
        data: user,
        success: (data) => {
            console.log(data);
            alert("success");
        },
        error: (err) => {
            console.log(err);
            alert("fail");
        }
    });
    return false;
};
const createOrder = () => {
    let order = {
        user: $('input[name="userId"]').val(),
        item: $('input[name="itemId"]').val(),
        quantity: $('input[name="quantity"]').val(),
        price: $('input[name="price"]').val(),
        address: $('input[name="address"]').val()
    };
    $.ajax({
        url: '/api/orders/',
        type: 'post',
        dataType: 'json',
        data: order,
        success: (data) =>{
            console.log(data);
            alert("success");
        },
        error: (err) => {
            console.log(err);
            alert("fail");
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
        dataType: 'json',
        data: formData,
        processData: false,
        contentType: false,
        success: (data) => {
            console.log(data);
            alert("success");
        },
        error: (err) => {
            console.log(err);
            alert("fail");
        }
    });
    return false;
};
const readAllUsers = () => {
    $.ajax({
        url: '/api/users',
        type: 'get',
        dataType: 'json',
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readUserById = (id) => {
    $.ajax({
        url: '/api/users/'+id,
        type: 'get',
        dataType: 'json',
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
        url: '/api/users/email/'+email,
        type: 'get',
        dataType: 'json',
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
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readItemById = (id) => {
    $.ajax({
        url: '/api/items/'+id,
        type: 'get',
        dataType: 'json',
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readItemsByName = (name) => {
    $.ajax({
        url: '/api/items/name/'+name,
        type: 'get',
        dataType: 'json',
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readAllOrders = () => {
    $.ajax({
        url: '/api/orders',
        type: 'get',
        dataType: 'json',
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readOrderById = (id) => {
    $.ajax({
        url: '/api/orders/'+id,
        type: 'get',
        dataType: 'json',
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readOrdersByUserId = (id) => {
    $.ajax({
        url: '/api/orders/user-id/'+id,
        type: 'get',
        dataType: 'json',
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err);
        }
    });
};
const readOrdersByItemId = (id) => {
    $.ajax({
        url: '/api/orders/item-id/'+id,
        type: 'get',
        dataType: 'json',
        success: (data) => {
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