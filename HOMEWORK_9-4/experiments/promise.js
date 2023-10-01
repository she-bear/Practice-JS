// Promises - это стандартизированный интерфейс callback
// порядок работы измениться не сильно, трудности те же
// способ эмулировать многозадачность, не имея многозадачности

function getUserData(id) {
    return fetch(`https://reqres.in/api/users/${id}?delay=10`)
        .then(reponse => reponse.json())
        .then((rawUser) => {
            // F1
            const name = rawUser.data.first_name + rawUser.data.last_name;
            const email = rawUser.data.email;

            return ({
                name: name,
                email: email,
            });
        })
}

function main() {
    console.log('Main start')
    let id = 2;
    getUserData(id)
        .then(user => {
            // Data process 
            console.log('Data process ', user);
        });
    console.log('Main end');

}
main()