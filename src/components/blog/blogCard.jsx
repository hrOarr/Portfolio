import React from "react";

const BlogCard = ({blog}) => {
    return (
        <a href={blog.url} target={'_blank'} rel='noreferrer' className="relative rounded-md text-[#fff] bg-[#274059] hover:shadow-sm p-6 transform transition duration-500 hover:scale-105">
            <div>
                <h4 className="text-2xl pb-6">{blog.title}</h4>

                <ul className="flex absolute bottom-2 items-center space-x-4 text-[#9cb3c9]">
                    {
                        blog.tags && blog.tags.map((tag) => (
                            <li>
                                <span className="">#{tag}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </a>
    );
};

export default BlogCard;