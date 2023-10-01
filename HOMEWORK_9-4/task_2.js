/* Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения.Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.*/
const user = {
    "name": "John Doe",
    "job": "unknown"
};

async function setUserData(url, user) {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
    })
}

// вызов в соответствии с "подсказкой"
setUserData("https://reqres.in/api/users", user)
    .then(() => {
        console.log('User data saved successfully!');
    })
    .catch(error => {
        console.log(error.message);
    });

// либо так, но вызов будет выглядеть иначе
async function saveUserData(url, user) {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            console.log("User data saved successfully!");
        }
    } catch {
        (error) => console.log(error);
    }
}
saveUserData("https://reqres.in/api/users", user);