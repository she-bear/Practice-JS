// async-await - позволяет избежать трудностей с непонятным порядком выполнения
// программа выполняется так, как она написана, без сюрпризов с порядком вызова функций

async function getUserData(id) {
    const response = await fetch(`https://reqres.in/api/users/${id}?delay=10`)
    if (response.ok) {
        const rawUser = await response.json();
        const name = rawUser.data.first_name + rawUser.data.last_name;
        const email = rawUser.data.email;
        return ({
            name: name,
            email: email,
        });
    }
}

async function main() {
    console.log('Main start')
    let id = 2;
    const user = await getUserData(id);
    // Data process 
    console.log('Data process', user);
    console.log('Main end');
}
main();

// Доп. задание: последовательное получение данных о двух пользователях
// через promises и через await
// оценить трудности с promises
//getUserPair(id)
// GET id
// GET id+1
// {
//     name1: ""
//     name2:""
// }
