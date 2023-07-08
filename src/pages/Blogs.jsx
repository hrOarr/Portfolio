import React from 'react';
import {motion} from "framer-motion";

const blogs = [
    {
        title: 'A Closer Look at Lambda Expression — Feature of Java 8',
        url: 'https://medium.com/@astrodust/a-closer-look-at-lambda-expression-feature-of-java-8-9c2fa57fcb1f',
        tags: ['Java', 'Lambda']
    },
    {
        title: 'A Guide To Stream API — Feature of Java 8',
        url: 'https://medium.com/@astrodust/a-guide-to-stream-api-feature-of-java-8-abaf7277d875',
        tags: ['Java', 'Stream', 'Functional Interface']
    },
    {
        title: 'Prerequisites For Getting A Good Start To Spring Boot',
        url: 'https://medium.com/@astrodust/prerequisites-for-getting-a-good-start-to-spring-boot-2e71902df94b',
        tags: ['Java', 'Servlet', 'Spring Boot']
    },
    {
        title: 'Apache ActiveMQ — Key Differences On Classic vs Artemis',
        url: 'https://medium.com/@astrodust/apache-activemq-key-differences-on-classic-vs-artemis-a22efe9ea45a',
        tags: ['Java', 'Jms', 'Activemq', 'Artemis']
    },
    {
        title: 'Concurrency Issues with SimpleDateFormat in Java',
        url: 'https://medium.com/@astrodust/concurrency-issues-with-simpledateformat-in-java-29b77020ee11',
        tags: ['Java', 'Concurrency', 'Simple Date Format']
    }
];

const Blogs = () => {
    return (
        <div className="bg-[#0e2439]" id="blogs">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col py-20 max-w-7xl mx-auto p-5"
            >
                <div className="text-5xl md:text-6xl text-[#fff] pb-16">
                    Blogs
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        blogs && blogs.map((blog) => (
                            <a href={blog.url} target={'_blank'} rel='noreferrer' className="relative rounded-md text-[#fff] bg-[#274059] hover:shadow-sm p-6 transform transition duration-500 hover:scale-105">
                                <div>
                                    <h4 className="text-xl pb-6">{blog.title}</h4>

                                    <ul className="flex absolute bottom-2 items-center space-x-4 text-[#9cb3c9]">
                                        {
                                            blog.tags && blog.tags.map((tag) => (
                                                <li>
                                                    {/*<span className={`inline-block w-2 h-2 rounded-full`}></span>*/}
                                                    <span className="">#{tag}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </a>
                        ))
                    }
                </div>

                <div className="flex items-center justify-center pt-12">
                    <a href="https://medium.com/@astrodust" target={'_blank'} rel='noreferrer'>
                        <button
                            className="flex hover:bg-indigo-500 hover:text-white bg-white border-indigo-500 text-indigo-500 hover:scale-105 hover:duration-300 font-medium px-3 py-3 md:px-4 rounded-md uppercase">
                            <span className="uppercase text-md">More Blogs</span>
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Blogs;