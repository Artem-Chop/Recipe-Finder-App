'use client'

import PreparationTime from "../PreparationTime/PreparationTime"
import ReceiptTypeSelector from "../ReceiptTypeSelector/ReceiptTypeSelector"
import Search from "../Search/Search"
import Form from 'next/form'
import { useRef } from "react"

export default function SearchForm() {
    const formRef = useRef<any>(null)

    const onSubmit = (event: any) => {
        event.preventDefault();
        const hasValue = [...event.target.elements].some(elem => elem.value);
        if(hasValue){
            formRef.current?.submit()
        }
    }

    return (
        <Form ref={formRef} action="/recipes" onSubmit={onSubmit}>
            <div className="flex flex-col items-center p-2 min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Recipe Finder</h1>
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <Search placeholder="Enter receipt" />
                    <ReceiptTypeSelector />
                    <PreparationTime placeholder="Enter time" />
                    <button
                        type="submit"
                        className={`w-full p-2 text-white rounded ${true
                            ? "bg-blue-500 hover:bg-blue-700"
                            : "bg-gray-300 cursor-not-allowed"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Form >
    )
}