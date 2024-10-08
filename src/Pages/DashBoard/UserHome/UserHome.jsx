import UseAuth from "../../../hooks/UseAuth";


const UserHome = () => {
    const { user } = UseAuth();
    return (
        <div>
            <h1 className='text-center text-2xl'>
                <span>hello, Welcome </span> 
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default UserHome;