import {
    Navbar,
    Typography,
    IconButton,
    Collapse
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useGetCategoriesQuery } from "@/store/services/categories";

export default function Header({ categories }) {

    return (
        <header>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-1 opacity-70">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        className={`mr-4 cursor-pointer py-1.5 text-3xl font-caveat`}
                    >
                        <Link href="/">Меню на неделю</Link>
                    </Typography>
                    <Typography
                        className={`mr-4 cursor-pointer py-1.5 text-3xl font-caveat`}
                    >
                        <Link href="/menu/month">Что кушали в прошлом месяце</Link>
                    </Typography>
                </div>
            </Navbar>
        </header>
    );
}