import React, { ReactNode, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { PeriodCategoryContainer } from "./styles/category.style";

interface PeriodCategoryProps {
    children: ReactNode;
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
            <Box display="flex" justifyContent="space-between" py="12px">
                <h2 className="period-title">{greeting}</h2>
            </Box>
            {props.children}
        </PeriodCategoryContainer>
    );
}


export default PeriodCategories;
