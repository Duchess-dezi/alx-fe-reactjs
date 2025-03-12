function UserProfile() {
    return (
        <div className="bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-full sm:h-24 w-24 md:w-36 h-36 mx-auto" alt="User" />
            <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
            <p className="text-gray-600 sm:text-sm md:text-base ">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;