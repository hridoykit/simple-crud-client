import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};
        // console.log(user)
        
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {'content-type':'application/json'},
            body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => console.log(data))
    }

    return (
        <div>
            <h2>here is displaying single user: {loadedUser.name}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={loadedUser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser.email} id="" />
                <br />
                <br />
                <button type="submit"> Update a User</button>
            </form>
        </div>
    );
};

export default Update;