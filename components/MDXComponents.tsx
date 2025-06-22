import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type {MDXComponents} from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import BilibiliEmbed from "./BilibiliEmbed";
import YoutubeEmbed from "./YoutubeEmbed";
import VideoEmbed from "./VideoEmbed";


export const components: MDXComponents = {
    Image,
    TOCInline,
    a: CustomLink,
    pre: Pre,
    table: TableWrapper,
    BlogNewsletterForm,
    BilibiliEmbed,
    YoutubeEmbed,
    VideoEmbed,
}
