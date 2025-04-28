import favoritesData from '@/data/favoritesData'
import FavoriteCard from '@/components/favoriteCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Favorites' })

export default function Favorites() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Favorites
          </h1>
          <p className="text-2xl leading-7 text-orange-500 dark:text-gray-400">
            收藏夹
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {favoritesData.map((d) => (
              <FavoriteCard
                key={d.title}
                title={d.title}
                linkList={d.linkList.slice(0,5)}
                extensions={d.extensions}
                imgSrc={d.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
