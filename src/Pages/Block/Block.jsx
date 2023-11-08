import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";


const Block = () => {

    const items = [
        {
            id: 1,
            title: ' Access Token And Refresh Token',
            img: 'https://i.ibb.co/3SgJhFT/blog1.png',
            content: 'Access tokens and refresh tokens are used in web applications and APIs as authentication and authorization components. They used to ensure resource security and user access.An access token is a credential that a client uses to gain access to protected resources on behalf of a user or on its own. It represents the identity and permissions of the user. Access tokens have a finite lifespan, which adds another layer of security.When the current access token expires, a refresh token is used to obtain a new access token. It enables clients to keep user sessions going without having to ask the user for their credentials again. Refresh tokens are extremely serious because they can be used to obtain new access tokens without the users knowledge.In an authentication system, the following is the typical flow of access tokens and refresh tokens:For authentication, the client application (for example, a web or mobile app) sends a users credentials (username and password) to an authentication server.The authentication server generates an access token and a refresh token after successful authentication. The refresh token is longer lasting than the access token.The client securely stores the access token (e.g., in memory or as a httponly cookie) and uses it to make authorized API requests to resource servers on the users behalf.The refresh token is validated by the authentication server, and a new access token is issued, which the client can use to continue to gain authorized access.Client applications use access tokens to gain access to protected resources, and they can be stored in client-side locations such as in-memory storage, localStorage, sessionStorage, or cookies. However, when storing access tokens, security against XSS attacks is critical. Refresh tokens should be stored on the server side, such as in a server session or a secure HTTP-only cookie, because they have longer lifespans and are more sensitive. When requesting new access tokens, the server validates refresh tokens, increasing security and mitigating potential risks such as token leakage. Following best practices in communication security and enforcing token rotation policies are critical to ensuring robust token management and preventing unauthorized access.',

        },
        {
            id: 2,
            title: 'Express JS',
            img: 'https://i.ibb.co/HtSKXk7/blog2.jpg',
            content: 'Express.js is a popular Node.js web application framework. It facilitates the development of web applications and APIs by offering a variety of features and tools. Developers can use Express to define routes for handling client requests, making it simple to create endpoints for a variety of URL paths and HTTP methods. Express middleware system enables developers to extend the request-response cycle with functionality such as request data parsing, authentication, and error handling. Furthermore, Express simplifies the tasks of serving static files, managing HTTP requests, and dealing with various web application tasks. Express is an excellent choice for developers looking to create web services and applications on the server using Node.js and JavaScript. This is due to its robust ecosystem and active community.',

        },
        {
            id: 3,
            title: 'Nest JS ',
            img: 'https://i.ibb.co/qxVBdJz/blog3.jpg',
            content: 'NestJS is a popular and open-source framework for developing server-side applications in Node.js, TypeScript, and JavaScript. It is well-known for its modularity and extensibility, making it an excellent choice for developers working on projects of varying sizes and complexities. NestJS promotes a modular architecture, which allows developers to organize their codebase into reusable and maintainable modules, making it especially well-suited for larger applications. It takes advantage of TypeScripts strong typing and decorators to promote code clarity and maintainability, and it includes a dependency injection container for managing and injecting dependencies into application components. NestJS also includes built-in support for WebSockets, allowing for real-time communication, as well as middleware for tasks such as authentication and request validation.NestJS is a versatile framework for easily and efficiently creating web servers, RESTful APIs, microservices, and real-time applications, with database integration and an active community contributing to its ecosystem.',

        },
        {
            id: 3,
            title: 'Explantion Of My Code',
            img: 'https://i.ibb.co/JxpKmmf/blog4.png',
            content: 'This is a job portal.Here i use usestate and useEffect for handle the state.i deploy my site in the firebase.and deploy server site in vercel.so change the url of local host.',

        },
    ];

    const scrollToContent = (id) => {
        const contentElement = document.getElementById(`content-${id}`);
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <NavBar></NavBar>
            <Helmet>
                <title>Home | Block</title>
            </Helmet>
            <div className="max-w-6xl mx-auto py-4">
                <img className="w-screen h-[600px]" src="https://i.ibb.co/RzXn0wF/blog.jpg" alt="" />
                <div className="bg-base-200 mt-16 p-7 rounded-lg flex flex-col justify-center items-center max-w-xl mx-auto">
                    <h2 className="font-bold text-3xl text-center text-[#706233] ">Table of content</h2>
                    <ol className="text-[#B0926A] font-medium text-xl">
                        {items.map((item) => (
                            <li key={item.id} onClick={() => scrollToContent(item.id)}>

                                {item.title}
                            </li>
                        ))}
                    </ol>

                </div>
                <div>
                    {items.map((item) => (
                        <div key={item.id} id={`content-${item.id}`} className="content">
                            <h2 className="font-bold text-2xl text-[#3A4D39] text-center mt-24 mb-3">{item.id}.{item.title}</h2>
                            <img src={item.img} alt="" />
                            <div className="text-[#4F6F52] font-medium mb-3">{item.content}</div>
                        </div>
                    ))}
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Block;