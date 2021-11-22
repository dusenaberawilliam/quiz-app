import React from 'react'

const TreeResult = (props) => {
    return (
        <div className="grid mt-8 mb-8">
            <div className="relative ml-8">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.q1}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-24 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-24">
                    {props.ans1}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.q2}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-24 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-24">
                    {props.ans1}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.q3}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-24 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-24">
                    {props.ans1}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.q4}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-24 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-24">
                    {props.ans1}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-16 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    <div className="w-px h-12 bg-gray-500 left-4 absolute"></div>
                </div>
                <div className="ml-16">
                    {props.q5}
                </div>
            </div>
            <div className="relative ml-8 mt-4">
                <div>
                    <div className="w-24 h-px bg-gray-500 absolute top-4 z-0"></div>
                    <div className="bg-white w-8 h-8 rounded absolute z-20 text-center"><p>+</p></div>
                    {/* <div className="w-px h-16 bg-gray-500 left-4 absolute"></div> */}
                </div>
                <div className="ml-24">
                    {props.ans1}
                </div>
            </div>
        </div>
    )
}

export default TreeResult
