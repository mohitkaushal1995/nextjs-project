// @ts-nocheck
async function getUsers(){
   const res = await fetch(`${process.env.BASE_FETCH_URL}/api/users`) 
 const  { data } = await res.json()
   return data

}

// users from '../users.json'
export default async function Userlist (){

const users = await getUsers();


return(
<div>
<h1>Users List</h1>
{
   users&& users.map((user) =>(
    <div key={user.id}>
        {user.name}
    </div>

    ))
}



</div>
)


}