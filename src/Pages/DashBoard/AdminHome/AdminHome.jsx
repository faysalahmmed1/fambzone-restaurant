import UseAuth from "../../../hooks/UseAuth";


const AdminHome = () => {
    const { user } = UseAuth();
    return (
        <div>
            <h1 className=" text-center 2xl">
                <span>Hello, WelCome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default AdminHome;