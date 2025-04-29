"use client";
import {CoreContent} from 'pliny/utils/contentlayer';
import {Blog} from 'contentlayer/generated';
import dayjs from 'dayjs';
import {truncateSummary} from 'app/utils';
import Link from '@/components/Link';
import {useState} from "react";

const blogDateTemplate: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
};

interface Props {
    blogs: CoreContent<Blog>[]
}

interface YearGroup {
    [key: string | number]: CoreContent<Blog>[]
}

export default function AuthorLayout({blogs}: Props) {
    const blogsSortedByYear: YearGroup = {};
    blogs.reverse().forEach((blog) => {
        const year = dayjs(blog.date).year();
        if (!blogsSortedByYear[year]) {
            blogsSortedByYear[year] = [];
        }
        blogsSortedByYear[year].push(blog);
    });
    const [collapsedYears, setCollapsedYears] = useState<{ [key: string]: boolean }>({});
    const toggleCollapse = (year: string) => {
        setCollapsedYears((prev) => ({
            ...prev,
            [year]: !prev[year],
        }));
    };
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Archive
                    </h1>
                </div>
                {
                    Object.keys(blogsSortedByYear).map((year) => (
                        <section key={year}>
                            <div className="sticky top-0 pt-4 bg-white dark:bg-gray-950 shadow-xl shadow-white dark:shadow-gray-950 z-10">
                                <h1
                                    className="text-4xl text-gray-900 dark:text-gray-100 px-3 py-4 font-bold tracking-widest flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                    onClick={() => toggleCollapse(year)}
                                >
                                    <span>{year}</span>
                                    <span
                                        className={`transform transition-transform duration-300 ${
                                            collapsedYears[year] ? 'rotate-90' : 'rotate-0'
                                        }`}
                                    >▶
                                    </span>
                                </h1>
                            </div>
                            {
                                !collapsedYears[year] && (
                                    <div>
                                        {
                                            blogsSortedByYear[year].map((blog) => (
                                                <div key={blog.slug} className="relative">
                                                    <div className="absolute top-1/2 -mt-2.5 -left-3 bg-white dark:bg-black h-5 w-5 rounded-full border-4 border-primary-500"></div>
                                                    <div className="my-10 pl-10">
                                                        <h3 className="text-3xl text-gray-600 font-semibold tracking-wide mb-2 mt-1">
                                                            <Link href={`/${blog.path}`} className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400">
                                                                {blog.title}
                                                            </Link>
                                                            <p className="prose max-w-none text-gray-500 dark:text-gray-400">{truncateSummary(blog.summary)}</p>
                                                        </h3>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </section>
                    ))
                }
            </div>
        </>
    )
}
