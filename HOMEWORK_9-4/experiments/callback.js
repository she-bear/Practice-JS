// пример получения данных через callback-функции (устаревший)

function getUserData(id, callBack) {
    $.getJSON(`https://reqres.in/api/users/${id}?delay=10`, (rawUser) => {
        // F1
        const name = rawUser.data.first_name + rawUser.data.last_name;
        const email = rawUser.data.email;

        callBack({
            name: name,
            email: email,
        });
    });
}

function main() {
    console.log('Main start')
    let id = 2;
    getUserData(id, (user) => {
        // Data process 
        console.log('Data process ', user);
    });
    console.log('Main end');
}
main()
