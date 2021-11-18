import React from 'react'

const Tree = (props) => {
    return (
        <div className="grid">
            <div className="relative ml-8">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-16 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.p1}
                </div>
            </div>
            <div className="relative ml-8 mt-8">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-16 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.p2}
                </div>
            </div>
            <div className="relative ml-8 mt-8">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-16 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.p3}
                </div>
            </div>
            <div className="relative ml-8 mt-8">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-16 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.p4}
                </div>
            </div>
            <div className="relative ml-8 mt-8">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    {/* <div className="w-px h-16 bg-gray-500 left-4 absolute"></div> */}
                </div>
                <div className="ml-16">
                    {props.p5}
                </div>
            </div>
        </div>
    )
}

export default Tree
