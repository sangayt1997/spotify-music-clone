import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { CategoryContainer } from "./styles/category.style";

interface CategoryProps {
    children: ReactNode;
    categoryTitle: string;
}

const Category = (props: CategoryProps) => {
    return (
        <CategoryContainer>
            <Box display="flex" justifyContent="space-between" py="12px">
                <Link to="/" className="category-title">{props.categoryTitle}</Link>
                <Link to="/" className="category-description">Show all</Link>
            </Box>
            {props.children}
        </CategoryContainer>
    );
}


export default Category;
