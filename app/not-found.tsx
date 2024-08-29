import Navbar from "@/components/Navbar"
export default function NotFound() {
    return (
        <div className="bg-black-100">
            <Navbar />
            <div className="container pt-48 pb-48 flex items-center text-center justify-center">
                <div className="max-w-3xl my-64 mx-auto">
                    <h1 className="font-bold text-white"> 404 | Coming Soon </h1>
                </div>
            </div>
        </div>
    )
}