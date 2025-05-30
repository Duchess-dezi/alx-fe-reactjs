function UserProfile() {
    return (
        <div className="bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-full sm:h-24 sm:w-24 md:h-36 md:w-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" alt="User" />
            <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
            <p className="text-gray-600 hover:text-gray-800 sm:text-sm md:text-base ">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;