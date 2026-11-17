import React from 'react'

const page = () => {
    return (
        <div>
            <nav className="flex justify-center gap-4 p-4 bg-gray-200">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div>
                <span>
                    Welcome to our application! We are thrilled to have you here. Our goal is to provide you with the best experience possible, and we are constantly working to improve our services. Thank you for visiting our about page, and we hope you find the information you are looking for.
                </span>
            </div>
            <h1>
                About Page
            </h1>
            <span>
                This is the about page of our application. Here you can find information about our mission, values, and team. We are committed to providing the best service possible and continuously improving our offerings to meet the needs of our users.
            </span>
            <h6>
                It is important to note that our team is made up of dedicated professionals who are passionate about what they do. We believe in transparency, integrity, and collaboration, and we strive to create a positive impact in the communities we serve.
            </h6>
        <div>
            <h1>
                This is just a minor change.
            </h1>
        </div>
        </div>
    )
}

export default page
