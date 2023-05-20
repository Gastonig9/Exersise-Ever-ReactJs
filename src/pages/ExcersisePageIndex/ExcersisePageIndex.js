import { useEffect, useState } from "react";
import CardNav from "../../components/CardNav/CardNav";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

export default function ExcersisePageIndex() {
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        let count = 0;

        const loader = setInterval(() => {
            count++
            if (count === 3) {
                setisLoading(false)
                clearInterval(loader)
            }
        }, 1000);

    }, [])

    return (
        <>
            {isLoading ?
                <Loader />
                :
                <>
                    <Header />
                    <CardNav />
                </>
            }


        </>

    )
}