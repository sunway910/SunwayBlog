import { allBlogs } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import ArchiveLayout from '@/layouts/ArchiveLayout';
import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Archive' })

export default function Archive() {
    const blogs = allCoreContent(sortPosts(allBlogs));
    return (
        <>
            <ArchiveLayout blogs={blogs}></ArchiveLayout>
        </>
    );
}