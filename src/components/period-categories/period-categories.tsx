import React, { useEffect, useState } from "react";
import { PeriodCategoryContainer } from "./styles/category.style";

interface PeriodCategoryProps {
    children: React.ReactNode;
}

const PeriodCategories = (props: PeriodCategoryProps) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = time.getHours();
    let greeting: string;
    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return (
        <PeriodCategoryContainer>
            <h2 className="period-title">{greeting}</h2>
            {props.children}
        </PeriodCategoryContainer>
    );
}


export default PeriodCategories;
