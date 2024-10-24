const Footer = () => {
    return (
        <div className="items-center grid grid-cols-1 justify-between gap-4 border-t border-gray-300 py-6 px-20 md:grid-cols-2 bg-gray-100">
            <p className="text-sm/6 text-slate-900 max-md:text-center">
                © 2024 N. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end">
                <a href="/">Privacy Policy</a>
                <div className="h-4 w-px bg-slate-800"></div>
                <a href="/">Terms & Conditions</a>
            </div>
        </div>
    )
}

export default Footer