import { ReactNode } from "react"

type TContainerProps = {
    children: ReactNode
}
const Container = ({ children }: TContainerProps) => {
    return (
        <div className="w-full max-w-[1562px] mx-auto">
            {children}
        </div>
    )
}

export default Container